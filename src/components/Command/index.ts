import {
  Component,
  CommandInterface,
  ArgType,
  CommandRequestInterface,
  PromiseOr,
  CommandResponseInterface,
  PipeNextInterface,
  valueToString,
  argTypeToString,
  QuroError
} from '../..'
import { ArgDefInterface } from '../../interfaces/ArgDef'
import { ReplyResponse } from '../../classes/responses/ReplyResponse'
import { SendResponse } from '../../classes/responses/SendResponse'
import { RichEmbed } from 'discord.js'

/*
 * Command class.
 */
export abstract class Command extends Component implements CommandInterface {
  /**
   * Command name.
   */
  name = ''

  /**
   * Aliases of command name.
   */
  aliases: string[] = []

  /**
   * Command description.
   */
  description = ''

  /**
   * Hidden.
   */
  hidden = false

  /**
   * Example usages.
   */
  exampleUsages: string[] = []

  /**
   * Type check.
   */
  typeCheck = true

  /**
   * Arguments Definitions.
   */
  argDefs: {
    [name: string]: ArgDefInterface<ArgType.Any, any>
  } = {}

  /**
   * Constructor.
   */
  constructor() {
    super()
    this.name = this.constructor.name
  }

  /**
   * Call on handled.
   */
  abstract onHandle(
    request?: CommandRequestInterface
  ):
    | Generator<
        PromiseOr<CommandResponseInterface>,
        PromiseOr<CommandResponseInterface | void>
      >
    | CommandResponseInterface
    | void

  /**
   * Call on pipe.
   *
   * @param next
   */
  onPipe(request: CommandRequestInterface, next: PipeNextInterface) {
    const { text, number, boolean } = this.parseArgs<Command>(request)
    next.setPrependArgs([text])
    next.setAppendArgs([number, boolean])
    return next
  }

  /**
   * Create reply response.
   *
   * @param content
   */
  protected reply(content: any) {
    return new ReplyResponse(content)
  }

  /**
   * Create send response.
   *
   * @param content
   */
  protected send(content: any) {
    return new SendResponse(content)
  }

  /**
   * Create RichEmbed.
   */
  protected embed() {
    return new RichEmbed().setColor(this.bot.color)
  }

  /**
   * Parse request arguments.
   *
   * @param request
   */
  parseArgs<
    Cmd extends any,
    R = {
      [K in keyof Cmd['argDefs']]: Cmd['argDefs'][K]['typedValue']
    }
  >(request: CommandRequestInterface): R {
    const args: any = {}
    const commandArgs = Object.entries(this.argDefs)

    if (commandArgs.length === 1 && commandArgs[0][1].type === ArgType.String) {
      args[commandArgs[0][0]] = request.argsString
    } else {
      let index = 0
      for (const [key, def] of commandArgs) {
        const value = request.get(index) ?? def.defaultValue

        if (typeof value === 'undefined') {
          throw new QuroError(
            `Argument '${
              def.name === '' ? key : def.name
            }' has not default value.`
          )
        }

        if (this.typeCheck) {
          if (def.validate(value)) {
            args[key] = value
          } else {
            throw this.createTypeNotAssignableError(value, def)
          }
        } else {
          args[key] = value
        }

        ++index
      }
    }

    return args as R
  }

  /**
   * Create 'Type is not assignable to ...' error.
   *
   * @param value
   * @param argDef
   */
  private createTypeNotAssignableError<T, A extends ArgDefInterface<any, any>>(
    value: T,
    argDef: A
  ) {
    const typeString = argDef.expectedValues
      ? argDef.expectedValues.map(value => valueToString(value)).join('|')
      : argTypeToString(argDef.type)

    return new QuroError(
      `Type '${value}' is not assignable to type '${typeString}'`
    )
  }
}

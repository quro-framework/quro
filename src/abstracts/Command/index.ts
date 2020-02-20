import { CommandInterface } from '../../interfaces/Command'
import { PromiseOr } from '../..'
import { CommandResponseInterface } from '../../interfaces/CommandResponse'
import { PipeNextInterface } from '../../interfaces/PipeNext'
import { CommandRequestInterface } from '../../interfaces/CommandRequest'
import { Component } from '../Component'
import { ArgDefInterface } from '../../interfaces/ArgDef'
import { ArgType } from '../../types/ArgType'
import { QuroError } from '../QuroError'
import { valueToString, argTypeToString } from '../../helpers'

/*
 * Command class.
 */
export abstract class Command extends Component implements CommandInterface {
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

    let index = 0
    for (const [key, def] of Object.entries(this.argDefs)) {
      const value = request.get(index) ?? def.defaultValue

      if (typeof value === 'undefined') {
        throw new QuroError(
          `Argument '${def.name ?? key}' has not default value.`
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
      `Type ${value} is not assignable to type '${typeString}'`
    )
  }
}

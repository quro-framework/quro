import {
  CommandRequestInterface,
  RequestArgs,
  Message,
  PipeNextInterface,
  CommandInterface,
  CommandPrefix
} from '../..'

/*
 * CommandRequest class.
 */
export class CommandRequest implements CommandRequestInterface {
  /**
   * Arguments.
   */
  args: RequestArgs = []

  /**
   * Message.
   */
  readonly message!: Message

  /**
   * Whether call as pipe exit.
   */
  readonly isPipeExit!: boolean

  /**
   * Pipe routes.
   */
  readonly pipeRoutes!: PipeNextInterface[]

  /**
   * Command.
   */
  readonly command!: CommandInterface

  /**
   * Prefix string.
   */
  readonly prefixString: string

  /**
   * Prefix object.
   */
  readonly prefixObject: CommandPrefix

  /**
   * Request string.
   */
  readonly requestString: string

  /**
   * Command string.
   */
  readonly commandString: string

  /**
   * Args string.
   */
  readonly argsString: string

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: {
    args?: RequestArgs
    message?: Message
    isPipeExit?: boolean
    pipeRoutes?: PipeNextInterface[]
    command?: CommandInterface
    prefixString?: string
    prefixObject?: CommandPrefix
    requestString?: string
    commandString?: string
    argsString?: string
  }) {
    this.args = data.args || []
    if (data.message) {
      this.message = data.message
    }
    this.isPipeExit = data.isPipeExit ?? false
    this.pipeRoutes = data.pipeRoutes ?? []
    if (data.command) {
      this.command = data.command
    }
    this.prefixString = data.prefixString || ''
    this.prefixObject = data.prefixObject || ''
    this.requestString = data.requestString || ''
    this.commandString = data.commandString || ''
    this.argsString = data.argsString || ''
  }

  /**
   * Get argument by index.
   *
   * @param index
   */
  get<T extends RequestArgs[0]>(index: number) {
    return this.args[index] as T
  }

  /**
   * Get all arguments.
   */
  all<T extends RequestArgs>(): T {
    return this.args as T
  }
}

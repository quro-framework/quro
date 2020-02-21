import {
  BuilderInterface,
  CommandRequest,
  RequestArgs,
  Message,
  PipeNextInterface,
  CommandInterface,
  CommandPrefix
} from '../../..'

/*
 * CommandRequestBuilder class.
 */
export class CommandRequestBuilder implements BuilderInterface<CommandRequest> {
  /**
   * Arguments.
   */
  private args: RequestArgs = []

  /**
   * Message.
   */
  private message!: Message

  /**
   * Is pipe exit.
   */
  private isPipeExit = false

  /**
   * Pipe routes.
   */
  private pipeRotues: PipeNextInterface[] = []

  /**
   * Command.
   */
  private command!: CommandInterface

  /**
   * Prefix string.
   */
  private prefixString = ''

  /**
   * Prefix object.
   */
  private prefixObject: CommandPrefix = ''

  /**
   * Request string.
   */
  private requestString = ''

  /**
   * Command string.
   */
  private commandString = ''

  /**
   * Args string.
   */
  private argsString = ''

  /**
   * Set args.
   *
   * @param args
   */
  setArgs(args: RequestArgs) {
    this.args = args
    return this
  }

  /**
   * Set message.
   *
   * @param message
   */
  setMessage(message: Message) {
    this.message = message
    return this
  }

  /**
   * Set whether is pipe exit.
   *
   * @param isPipeExit
   */
  setIsPipeExit(isPipeExit: boolean) {
    this.isPipeExit = isPipeExit
    return this
  }

  /**
   * Set pipe routes.
   *
   * @param pipeRoutes
   */
  setPipeRoutes(pipeRoutes: PipeNextInterface[]) {
    this.pipeRotues = pipeRoutes
    return this
  }

  setCommand(command: CommandInterface) {
    this.command = command
    return this
  }

  /**
   * Set prefix string.
   *
   * @param prefixString
   */
  setPrefixString(prefixString: string) {
    this.prefixString = prefixString
    return this
  }

  /**
   * Set prefix object.
   *
   * @param prefixObject
   */
  setPrefixObject(prefixObject: CommandPrefix) {
    this.prefixObject = prefixObject
    return this
  }

  /**
   * Set request string.
   *
   * @param requestString
   */
  setRequestString(requestString: string) {
    this.requestString = requestString
    return this
  }

  /**
   * Set command string.
   *
   * @param commandString
   */
  setCommandString(commandString: string) {
    this.commandString = commandString
    return this
  }

  /**
   * Build command request.
   */
  build() {
    return new CommandRequest({
      args: this.args,
      message: this.message,
      isPipeExit: this.isPipeExit,
      pipeRoutes: this.pipeRotues,
      command: this.command,
      prefixString: this.prefixString,
      prefixObject: this.prefixObject,
      requestString: this.requestString,
      commandString: this.commandString,
      argsString: this.argsString
    })
  }
}

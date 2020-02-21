import {
  RequestArgs,
  Component,
  CommandManagerInterface,
  Message,
  PipeNextInterface,
  QuroError,
  CommandRequestBuilder,
  CommandRequestInterface,
  PipeNext,
  CommandResponseInterface,
  PromiseOr,
  ContentParseToken,
  ContentParseTokenType,
  ContentParser
} from '../..'

/**
 * CommandData type.
 */
type CommandData = {
  name: string
  args: RequestArgs
}

/*
 * CommandManager class.
 */
export class CommandManager extends Component
  implements CommandManagerInterface {
  /**
   * Call on mounted.
   */
  onMounted() {
    this.bot.onMessage(this.onMessage.bind(this))
  }

  /**
   * On message.
   *
   * @param message
   */
  private onMessage(message: Message) {
    this.execute(message)
  }

  /**
   * Execute message command.
   *
   * @param message
   */
  async execute(message: Message) {
    const content = message.content
    const prefix = this.getPrefixString(content)

    // Check prefix exists.
    if (typeof prefix === 'undefined') return
    const prefixObject = this.getPrefixObject(content) ?? prefix

    // Command string(Content without prefix).
    const commandString = content.slice(prefix.length)

    // Parse content.
    const tokens = this.parseContent(commandString)

    // Parse commands.
    const commandsData = this.parseTokens(tokens)

    /**
     * Pipe data.
     */
    const hasPipes = commandsData.length > 1
    const pipeRoutes: PipeNextInterface[] = []
    let appendArgs: RequestArgs = []
    let prependArgs: RequestArgs = []

    for (const commandData of commandsData) {
      const isPipeExit = commandData === commandsData[commandsData.length - 1]

      if (commandData.name === '') {
        throw new QuroError(`Unexpected command name. name is empy.`)
      }

      const command = this.getCommand(commandData.name)

      if (typeof command === 'undefined') {
        throw new QuroError(`Command '${commandData.name}' is not defined.`)
      }

      const request = new CommandRequestBuilder()
        .setArgs([...prependArgs, ...commandData.args, ...appendArgs])
        .setMessage(message)
        .setIsPipeExit(hasPipes && isPipeExit)
        .setPipeRoutes(pipeRoutes)
        .setCommand(command)
        .setPrefixString(prefix)
        .setPrefixObject(prefixObject)
        .setRequestString(content)
        .setCommandString(commandString)
        .build()

      if (hasPipes && !isPipeExit) {
        const next = this.dispatchPipe(request)
        prependArgs = next.prependArgs
        appendArgs = next.appendArgs
      } else {
        await this.dispatchRequest(request)
      }
    }
  }

  /**
   * Dispatch pipe.
   *
   * @param request
   */
  private dispatchPipe(request: CommandRequestInterface) {
    const pipeNext = new PipeNext(request)
    return request.command.onPipe(request, pipeNext)
  }

  /**
   * Dispatch request.
   *
   * @param request
   */
  private async dispatchRequest(request: CommandRequestInterface) {
    const result = await request.command.onHandle(request)
    if (typeof result === 'undefined') return
    if (this.isCommandResponse(result)) {
      await result.dispatch(request, this.context)
    }
    if (this.isGenerator(result)) {
      let process = result.next()

      while (process.done === false) {
        const response = await process.value
        await response.dispatch(request, this.context)
        process = result.next()
      }

      const response = await process.value
      if (typeof response !== 'undefined') {
        await response.dispatch(request, this.context)
      }
    }
  }

  /**
   * Returns is generator.
   *
   * @param value
   */
  private isGenerator(
    value: any
  ): value is Generator<
    PromiseOr<CommandResponseInterface>,
    PromiseOr<CommandResponseInterface | void>
  > {
    return (
      typeof value[Symbol.iterator] !== 'undefined' ||
      typeof value[Symbol.asyncIterator] !== 'undefined'
    )
  }

  /**
   * Returns whether value is command response.
   *
   * @param value
   */
  private isCommandResponse(value: any): value is CommandResponseInterface {
    return typeof value.dispatch === 'function'
  }

  /**
   * Get command by name.
   *
   * @param name
   */
  private getCommand(name: string) {
    const command = this.bot.commands.find(command => {
      if (command.name === name) return true
      if (command.aliases.findIndex(alias => alias === name) !== -1) return true

      return false
    })

    return command
  }

  /**
   * Parse tokens.
   *
   * @param tokens
   */
  private parseTokens(tokens: ContentParseToken[]) {
    const commands: CommandData[] = []
    let command: ContentParseToken | undefined
    let args: RequestArgs = []

    for (const token of tokens) {
      if (token.type === ContentParseTokenType.CommandCallStart) {
        command = token
        args = []
      } else if (token.type === ContentParseTokenType.CommandCallEnd) {
        commands.push({
          name: command?.commandName as string,
          args
        })
      } else if (token.type === ContentParseTokenType.StringArgument) {
        args.push(token.stringValue as string)
      } else if (token.type === ContentParseTokenType.BooleanArgument) {
        args.push(token.booleanValue as boolean)
      } else if (token.type === ContentParseTokenType.NumberArgument) {
        args.push(token.numberValue as number)
      }
    }

    return commands
  }

  /**
   * Parse content.
   *
   * @param content
   */
  private parseContent(content: string) {
    const parser = new ContentParser()
    const result = parser.parse(content)

    return result
  }

  /**
   * Get prefix string of content.
   *
   * @param content
   */
  private getPrefixString(content: string) {
    for (const prefix of this.bot.prefixes) {
      if (typeof prefix === 'string' && content.startsWith(prefix)) {
        // String prefix.
        return prefix
      } else if (prefix instanceof RegExp) {
        // RegExp prefix.
        const matches = content.match(prefix)
        if (matches) return matches[0]
      }
    }
  }

  /**
   * Get prefix objecct of content.
   *
   * @param content
   */
  private getPrefixObject(content: string) {
    for (const prefix of this.bot.prefixes) {
      if (typeof prefix === 'string' && content.startsWith(prefix)) {
        // String prefix.
        return prefix
      } else if (prefix instanceof RegExp) {
        // RegExp prefix.
        const matches = content.match(prefix)
        if (matches) return prefix
      }
    }
  }
}

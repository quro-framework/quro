import { Component } from '../Component'
import { CommandManagerInterface } from '../../interfaces/CommandManager'
import { Message } from 'discord.js'
import { ContentParser, CommandRequest } from '../../impls'
import {
  ContentParseToken,
  ContentParseTokenType,
  RequestArgs
} from '../../types'
import { QuroError } from '../QuroError'
import { CommandRequestBuilder } from '../../classes/builders/CommandRequestBuilder'
import { CommandRequestInterface } from '../../interfaces/CommandRequest'

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

    for (const commandData of commandsData) {
      const isLast = commandData === commandsData[commandsData.length - 1]
      const command = this.getCommand(commandData.name)

      if (typeof command === 'undefined') {
        throw new QuroError(`Command '${commandData.name}' is not defined.`)
      }

      const request = new CommandRequestBuilder()
        .setArgs(commandData.args)
        .setMessage(message)
        .setCommand(command)
        .setPrefixString(prefix)
        .setPrefixObject(prefixObject)
        .setRequestString(content)
        .setCommandString(commandString)
        .build()

      const response = await this.dispatchRequest(request)
      console.log(response)
    }
  }

  /**
   * Dispatch request.
   *
   * @param request
   */
  private async dispatchRequest(request: CommandRequestInterface) {
    return await request.command.onHandle(request)
  }

  /**
   * Get command by name.
   *
   * @param name
   */
  private getCommand(name: string) {
    const command = this.bot.commands.find(command => {
      if (command.name === name) return true
      if (command.aliases.findIndex(alias => alias === name) !== 0) return true

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

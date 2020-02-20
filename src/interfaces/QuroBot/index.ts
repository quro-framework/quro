import { QuroPluginInterface } from '../QuroPlugin'
import { Client } from 'discord.js'
import { CommandInterface } from '../Command'
import { ContextInterface } from '../Context'
import { PromiseOr } from '../../types'
import { BotEventListenable } from '../../abstracts'
import { CommandPrefix } from '../../types/CommandPrefix'

/*
 * QuroBotInterface.
 */
export interface QuroBotInterface extends BotEventListenable {
  /**
   * Discord.js client.
   */
  readonly client: Client

  /**
   * Context.
   */
  readonly context: ContextInterface

  /**
   * Default nickname.
   */
  nickname?: string

  /**
   * Primary bot color.
   */
  color: string

  /**
   * Command prefixes.
   */
  prefixes: CommandPrefix[]

  /**
   * Install plugin.
   *
   * @param plugin
   */
  use(plugin: QuroPluginInterface): PromiseOr<this>

  /**
   * Register a command.
   *
   * @param command
   */
  registerCommand(command: CommandInterface): this

  /**
   * Register commands.
   *
   * @param commands
   */
  registerCommands(commands: CommandInterface[]): this

  /**
   * Start bot with token.
   *
   * @param token
   */
  start(token: string): void
}

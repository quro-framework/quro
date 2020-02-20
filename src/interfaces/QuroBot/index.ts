import { QuroPluginInterface } from '../QuroPlugin'
import { Client } from 'discord.js'
import { CommandInterface } from '../Command'

/*
 * QuroBotInterface.
 */
export interface QuroBotInterface {
  /**
   * Discord.js client.
   */
  readonly client: Client

  /**
   * Install plugin.
   *
   * @param plugin
   */
  use(plugin: QuroPluginInterface): this

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
}

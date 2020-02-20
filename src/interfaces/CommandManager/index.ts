import { Message } from 'discord.js'

/*
 * CommandManagerInterface.
 */
export interface CommandManagerInterface {
  /**
   * Execute message.
   *
   * @param message
   */
  execute(message: Message): void
}

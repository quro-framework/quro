import { Message } from '../..'

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

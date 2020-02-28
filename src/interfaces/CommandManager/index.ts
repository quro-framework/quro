import { Message } from '../..'
import { CommandManagerErrorListener } from '../../types/CommandManagerErrorListener'

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

  /**
   * Add ErrorListener.
   *
   * @param listener
   */
  addErrorListener(listener: CommandManagerErrorListener): this
}

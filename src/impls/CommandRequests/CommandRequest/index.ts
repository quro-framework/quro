import { CommandRequestInterface } from '../../../interfaces/CommandRequest'
import { RequestArgs } from '../../../types/RequestArgs'
import { Message } from '../../..'

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
   * Constructor.
   *
   * @param data
   */
  constructor(data: { args?: RequestArgs; message?: Message }) {
    this.args = data.args || []
    if (data.message) {
      this.message = data.message
    }
  }

  /**
   * Get argument by index.
   *
   * @param index
   */
  get<T extends RequestArgs[0]>(index: number): T {
    return this.args[index] as T
  }

  /**
   * Get all arguments.
   */
  all<T extends RequestArgs>(): T {
    return this.args as T
  }
}

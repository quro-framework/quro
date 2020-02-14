import { CommandRequestInterface } from '../../../interfaces/CommandRequest'
import { RequestArgs } from '../../../types/RequestArgs'

/*
 * CommandRequest class.
 */
export class CommandRequest implements CommandRequestInterface {
  /**
   * Arguments.
   */
  args: RequestArgs = []

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: { args?: RequestArgs }) {
    this.args = data.args || []
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

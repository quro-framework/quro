import { CommandRequestInterface } from '../../../interfaces/CommandRequest'
import { RequestArgs } from '../../../types/RequestArgs'

/*
 * CommandRequest class.
 */
export class CommandRequest implements CommandRequestInterface {
  /**
   * Arguments.
   */
  args: RequestArgs = {}

  /**
   * Constructor.
   *
   * @param data
   */
  constructor(data: { args?: RequestArgs }) {
    this.args = data.args || {}
  }

  /**
   * Get argument by name.
   *
   * @param name
   */
  get<T extends RequestArgs['name']>(name: string): T {
    return this.args[name] as T
  }
}

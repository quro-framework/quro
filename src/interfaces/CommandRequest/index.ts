import { RequestArgs } from '../../types/RequestArgs'

/*
 * CommandRequest interface.
 */
export interface CommandRequestInterface {
  /**
   * Get argument by name.
   *
   * @param name
   */
  get<T extends RequestArgs['name']>(name: string): T
}

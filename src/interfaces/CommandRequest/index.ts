import { RequestArgs } from '../../types/RequestArgs'

/*
 * CommandRequest interface.
 */
export interface CommandRequestInterface {
  /**
   * Get argument by index.
   *
   * @param index
   */
  get<T extends RequestArgs[0]>(index: number): T
}

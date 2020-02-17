import { RequestArgs } from '../../types'

/*
 * PipeNextInterface.
 */
export interface PipeNextInterface {
  /**
   * Set append args.
   *
   * @param args
   */
  setAppendArgs(args: RequestArgs[0][]): this

  /**
   * Set prepend args.
   *
   * @param args
   */
  setPrependArgs(args: RequestArgs[0][]): this
}

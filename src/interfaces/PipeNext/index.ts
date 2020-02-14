import { RequestArgs } from '../../types'

/*
 * PipeNextInterface.
 */
export interface PipeNextInterface {
  /**
   * Set args.
   *
   * @param args
   */
  setArgs(args: RequestArgs[0][]): this
}

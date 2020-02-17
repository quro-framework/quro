import { RequestArgs } from '../../types'
import { CommandRequestInterface } from '../CommandRequest'

/*
 * PipeNextInterface.
 */
export interface PipeNextInterface {
  /**
   * Command request.
   */
  readonly request: CommandRequestInterface

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

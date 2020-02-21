import { CommandRequestInterface } from '..'
import { RequestArgs } from '../..'

/*
 * PipeNextInterface.
 */
export interface PipeNextInterface {
  /**
   * Command request.
   */
  readonly request: CommandRequestInterface

  /**
   * Append arguments.
   */
  readonly appendArgs: RequestArgs

  /**
   * Prepend arguments.
   */
  readonly prependArgs: RequestArgs

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

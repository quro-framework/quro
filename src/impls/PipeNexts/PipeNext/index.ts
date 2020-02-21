import { PipeNextInterface } from '../../../interfaces/PipeNext'
import { CommandRequestInterface } from '../../../interfaces/CommandRequest'
import { RequestArgs } from '../../../types'

/*
 * PipeNext class.
 */
export class PipeNext implements PipeNextInterface {
  /**
   * Prepend args.
   */
  private mPrependArgs: RequestArgs[0][] = []

  /**
   * Append args.
   */
  private mAppendArgs: RequestArgs[0][] = []

  /**
   * Command request.
   */
  readonly request: CommandRequestInterface

  /**
   * Prepend arguments.
   */
  get prependArgs() {
    return this.mPrependArgs
  }

  /**
   * Append arguments.
   */
  get appendArgs() {
    return this.mAppendArgs
  }

  /**
   * PipeNext constructor.
   *
   * @param request
   */
  constructor(request: CommandRequestInterface) {
    this.request = request
  }

  /**
   * Set append args.
   *
   * @param args
   */
  setAppendArgs(args: RequestArgs[0][]) {
    this.appendArgs = args
    return this
  }

  /**
   * Set prepend args.
   *
   * @param args
   */
  setPrependArgs(args: RequestArgs[0][]) {
    this.prependArgs = args
    return this
  }
}

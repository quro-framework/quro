import { PipeNextInterface, RequestArgs, CommandRequestInterface } from '../..'

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
    this.mAppendArgs = args
    return this
  }

  /**
   * Set prepend args.
   *
   * @param args
   */
  setPrependArgs(args: RequestArgs[0][]) {
    this.mPrependArgs = args
    return this
  }
}

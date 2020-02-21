import { CommandRequestInterface, ContextInterface } from '..'
import { PromiseOr } from '../..'

/*
 * CommandResponseInterface.
 */
export interface CommandResponseInterface {
  /**
   * Dispatch response.
   *
   * @param request
   * @param context
   */
  dispatch(
    request?: CommandRequestInterface,
    context?: ContextInterface
  ): PromiseOr
}

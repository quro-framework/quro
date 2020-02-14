import { CommandRequestInterface } from '../CommandRequest'
import { ContextInterface } from '../Context'
import { PromiseOr } from '../../types/PromiseOr'

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

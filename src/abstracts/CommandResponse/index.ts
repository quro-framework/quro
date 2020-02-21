import { CommandResponseInterface } from '../../interfaces/CommandResponse'
import { CommandRequestInterface } from '../../interfaces/CommandRequest'
import { ContextInterface } from '../../interfaces/Context'

/*
 * CommandResponse class.
 */
export class CommandResponse implements CommandResponseInterface {
  /**
   * Dispatch response.
   *
   * @param request
   * @param context
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch(_request?: CommandRequestInterface, _context?: ContextInterface) {}
}

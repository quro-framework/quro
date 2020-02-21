import {
  CommandResponseInterface,
  CommandRequestInterface,
  ContextInterface
} from '../../..'

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

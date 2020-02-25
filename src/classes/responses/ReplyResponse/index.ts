import { CommandResponseInterface, CommandRequestInterface } from '../../..'

/*
 * ReplyResponse class.
 */
export class ReplyResponse implements CommandResponseInterface {
  /**
   * Reply content.
   */
  readonly content: any

  /**
   * ReplyResponse constructor.
   *
   * @param content
   */
  constructor(content: any) {
    this.content = content
  }

  /**
   * Dispatch response.
   *
   * @param request
   */
  dispatch(request: CommandRequestInterface) {
    request.message.reply(this.content)
  }
}

import { CommandResponseInterface, CommandRequestInterface } from '../../..'

/*
 * SendResponse class.
 */
export class SendResponse implements CommandResponseInterface {
  /**
   * Send content.
   */
  readonly content: any

  /**
   * SendResponse constructor.
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
    request.message.channel.send(this.content)
  }
}

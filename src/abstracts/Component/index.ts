import { ContextInterface } from '../../interfaces/Context'
import { ComponentInterface } from '../../interfaces/Component'

/*
 * Component class.
 */
export class Component implements ComponentInterface {
  /**
   * Context member.
   */
  private mContext!: ContextInterface

  /**
   * Runtime context.
   */
  get context() {
    return this.mContext
  }

  /**
   * Bot.
   */
  get bot() {
    return this.mContext.bot
  }

  /**
   * Set context.
   *
   * @param context
   */
  setContext(context: ContextInterface) {
    this.mContext = context
  }

  /**
   * Call on registerd.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onRegister() {}

  /**
   * Call on mounted.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onMounted() {}
}

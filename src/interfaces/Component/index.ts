import { ContextInterface } from '../Context'
import { PromiseOr } from '../../types'

/*
 * ComponentInterface.
 */
export interface ComponentInterface {
  /**
   * Runtime context.
   */
  readonly context: ContextInterface

  /**
   * Set context.
   *
   * @param context
   */
  setContext(context: ContextInterface): void

  /**
   * Call on registered.
   */
  onRegister(): PromiseOr

  /**
   * Call on mounted.
   */
  onMounted(): PromiseOr
}

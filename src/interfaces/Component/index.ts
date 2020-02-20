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
   * Call on mounted.
   */
  onMounted(): PromiseOr
}

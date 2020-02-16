import { ContextInterface } from '../Context'

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
  onMounted(): void
}

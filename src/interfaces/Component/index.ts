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
   * Call on mounted.
   */
  onMounted(): void
}

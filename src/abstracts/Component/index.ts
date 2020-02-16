import { ContextInterface } from '../../interfaces/Context'
import { ComponentInterface } from '../../interfaces/Component'

/*
 * Component class.
 */
export class Component implements ComponentInterface {
  /**
   * Runtime context.
   */
  readonly context: ContextInterface

  /**
   * Component constructor.
   *
   * @param context
   */
  constructor(context: ContextInterface) {
    this.context = context
  }

  /**
   * Call on mounted.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onMounted() {}
}

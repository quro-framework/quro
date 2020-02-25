import { CommandInterface } from '../Command'
import { PromiseOr } from '../../types'

/*
 * CommandFileLoader interface.
 */
export interface CommandFileLoaderInterface {
  /**
   * Load commands.
   *
   * @param path
   */
  load(path: string): PromiseOr<CommandInterface[]>
}

import { PromiseOr } from '../../types'
import { CommandResponseInterface } from '../CommandResponse'
import { PipeNextInterface } from '../PipeNext'

/*
 * CommandInterface.
 */
export interface CommandInterface {
  /**
   * Call on handled.
   */
  onHandle(): Generator<
    PromiseOr<CommandResponseInterface>,
    PromiseOr<CommandResponseInterface | void>
  >

  /**
   * Call on pipe.
   *
   * @param next
   */
  onPipe(next: PipeNextInterface): PipeNextInterface
}

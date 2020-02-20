import { PromiseOr } from '../../types'
import { CommandResponseInterface } from '../CommandResponse'
import { PipeNextInterface } from '../PipeNext'
import { CommandRequestInterface } from '../CommandRequest'
import { ComponentInterface } from '../Component'

/*
 * CommandInterface.
 */
export interface CommandInterface extends ComponentInterface {
  /**
   * Call on handled.
   */
  onHandle(
    request?: CommandRequestInterface
  ):
    | Generator<
        PromiseOr<CommandResponseInterface>,
        PromiseOr<CommandResponseInterface | void>
      >
    | CommandResponseInterface
    | void

  /**
   * Call on pipe.
   *
   * @param next
   */
  onPipe(
    request: CommandRequestInterface,
    next: PipeNextInterface
  ): PipeNextInterface
}

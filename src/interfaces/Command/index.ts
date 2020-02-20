import { PromiseOr } from '../../types'
import { CommandResponseInterface } from '../CommandResponse'
import { PipeNextInterface } from '../PipeNext'
import { CommandRequestInterface } from '../CommandRequest'
import { ComponentInterface } from '../Component'
import { ArgDefInterface } from '../ArgDef'
import { ArgType } from '../../types/ArgType'

/*
 * CommandInterface.
 */
export interface CommandInterface extends ComponentInterface {
  /**
   * Type check.
   */
  typeCheck: boolean

  /**
   * Arguments Definitions.
   */
  argDefs: {
    [name: string]: ArgDefInterface<ArgType.Any, any>
  }

  /**
   * Command name.
   */
  name: string

  /**
   * Aliases of command name.
   */
  aliases: string[]

  /**
   * Command description.
   */
  description: string

  /**
   * Example usages.
   */
  exampleUsages: string[]

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

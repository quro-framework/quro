import { RequestArgs } from '../../types/RequestArgs'
import { Message } from '../..'
import { PipeNextInterface } from '../PipeNext'
import { CommandInterface } from '../Command'
import { CommandPrefix } from '../../types/CommandPrefix'

/*
 * CommandRequest interface.
 */
export interface CommandRequestInterface {
  /**
   * Message.
   */
  readonly message: Message

  /**
   * Whether call as pipe exit.
   */
  readonly isPipeExit: boolean

  /**
   * Pipe routes.
   */
  readonly pipeRoutes: PipeNextInterface[]

  /**
   * Command.
   */
  readonly command: CommandInterface

  /**
   * Prefix string.
   */
  readonly prefixString: string

  /**
   * Prefix object.
   */
  readonly prefixObject: CommandPrefix

  /**
   * Request string.
   */
  readonly requestString: string

  /**
   * Command string.
   */
  readonly commandString: string

  /**
   * Args string.
   */
  readonly argsString: string

  /**
   * Get argument by index.
   *
   * @param index
   */
  get<T extends RequestArgs[0]>(index: number): T

  /**
   * Get all arguments.
   */
  all<T extends RequestArgs>(): T
}

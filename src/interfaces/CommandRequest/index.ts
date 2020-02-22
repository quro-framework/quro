import {
  Message,
  PipeNextInterface,
  CommandPrefix,
  RequestArgs,
  CommandInterface
} from '../..'
import { User, Collection, Snowflake, MessageAttachment } from 'discord.js'

/*
 * CommandRequest interface.
 */
export interface CommandRequestInterface {
  /**
   * Message.
   */
  readonly message: Message

  /**
   * Request author.
   */
  readonly author: User

  /**
   * Attachments.
   */
  readonly attachments: Collection<Snowflake, MessageAttachment>

  /**
   * Created at.
   */
  readonly createdAt: Date

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

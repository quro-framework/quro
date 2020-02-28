import { QuroError } from '../../..'
import { Message } from 'discord.js'

/**
 * CommandNameIsEmptyErrorData type.
 */
export type CommandNameIsEmptyErrorData = {
  /**
   * Message.
   */
  message: Message
}

/*
 * CommandNameIsEmptyError class.
 */
export class CommandNameIsEmptyError extends QuroError<
  CommandNameIsEmptyErrorData
> {
  /**
   * CommandNameIsEmptyError constructor.
   *
   * @param message
   */
  constructor(message: string, data: CommandNameIsEmptyErrorData) {
    super(message, 'command_name_is_empty', data)
  }
}

import { QuroError } from '../../..'

/**
 * CommandNotFoundErrorData.
 */
export type CommandNotFoundErrorData = {
  /**
   * Requested command name.
   */
  requestedName: string
}

/*
 * CommandNotFoundError class.
 */
export class CommandNotFoundError extends QuroError<CommandNotFoundErrorData> {
  /**
   * CommandNotFoundError constructor.
   *
   * @param message
   * @param data
   */
  constructor(message: string, data: CommandNotFoundErrorData) {
    super(message, 'command_not_found', data)
  }
}

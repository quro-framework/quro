import { QuroError } from '../../..'

/*
 * CommandNameIsEmptyError class.
 */
export class CommandNameIsEmptyError extends QuroError {
  /**
   * CommandNameIsEmptyError constructor.
   *
   * @param message
   */
  constructor(message: string) {
    super(message, 'command_name_is_empty')
  }
}

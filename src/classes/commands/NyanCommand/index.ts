import { Command } from '../../../components'
import { CommandRequest } from '../../../impls'

/**
 * Nyan command.
 */
export class NyanCommand extends Command {
  /**
   * Message patterns.
   */
  private patterns = [
    'にゃ？',
    'にゃーん',
    'にゃん',
    'にゃにゃ',
    'にゃにゃにゃ？',
    'にゃ！',
    'にゃーん！'
  ]

  /**
   * Kaomojis.
   */
  private kamojis = ['', '(=^・・^=)', '(ΦωΦ)', '(=^・^=)']

  /**
   * Hidden.
   */
  hidden = true

  /**
   * Call on handle.
   *
   * @param request
   */
  onHandle(request: CommandRequest) {
    request.message.reply(
      this.choice(this.patterns) + this.choice(this.kamojis)
    )
  }

  /**
   * Choice random value.
   *
   * @param values
   */
  private choice(values: string[]) {
    return values[Math.floor(Math.random() * values.length)]
  }
}

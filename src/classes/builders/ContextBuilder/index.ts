import { BuilderInterface } from '../../../interfaces/Builder'
import { ContextInterface } from '../../../interfaces/Context'
import { QuroBotInterface } from '../../../interfaces/QuroBot'

/*
 * ContextBuidler class.
 */
export class ContextBuilder implements BuilderInterface<ContextInterface> {
  /**
   * Bot.
   */
  private bot!: QuroBotInterface

  /**
   * Set bot.
   *
   * @param bot
   */
  setBot(bot: QuroBotInterface) {
    this.bot = bot
    return this
  }

  /**
   * Build context.
   */
  build() {
    const context: ContextInterface = {
      bot: this.bot
    }

    return context
  }
}

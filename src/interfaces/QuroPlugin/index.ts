import { PromiseOr, QuroBotInterface } from '../..'

/*
 * QuroPluginInterface.
 */
export interface QuroPluginInterface {
  /**
   * Install plugin to the bot.
   *
   * @param bot
   */
  install(bot: QuroBotInterface): PromiseOr
}

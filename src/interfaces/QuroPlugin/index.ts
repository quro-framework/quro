import { QuroBotInterface } from '../QuroBot'
import { PromiseOr } from '../../types'

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

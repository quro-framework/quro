import {
  BotEventListenable,
  Client,
  ContextInterface,
  CommandPrefix,
  CommandInterface,
  PromiseOr,
  QuroPluginInterface
} from '../..'

/*
 * QuroBotInterface.
 */
export interface QuroBotInterface extends BotEventListenable {
  /**
   * Discord.js client.
   */
  readonly client: Client

  /**
   * Context.
   */
  readonly context: ContextInterface

  /**
   * Default nickname.
   */
  nickname?: string

  /**
   * Primary bot color.
   */
  color: number

  /**
   * Command prefixes.
   */
  prefixes: CommandPrefix[]

  /**
   * Commands.
   */
  commands: CommandInterface[]

  /**
   * Install plugin.
   *
   * @param plugin
   */
  use(plugin: QuroPluginInterface): PromiseOr<this>

  /**
   * Register a command.
   *
   * @param command
   */
  registerCommand(command: CommandInterface): this

  /**
   * Register commands.
   *
   * @param commands
   */
  registerCommands(commands: CommandInterface[]): this

  /**
   * Start bot with token.
   *
   * @param token
   */
  start(token: string): void
}

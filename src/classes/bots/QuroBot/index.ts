import {
  CommandPrefix,
  QuroBotInterface,
  ComponentInterface,
  Client,
  CommandManager,
  ContextInterface,
  CommandInterface,
  ContextBuilder,
  QuroPluginInterface,
  PromiseOr
} from '../../..'
import { BotEventListenable } from '../../../impls'
import { NyanCommand } from '../../commands'

/**
 * QuroBotOptions type.
 */
export type QuroBotOptions = {
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
   * Author IDs.
   */
  authorIds: string[]

  /**
   * Bot version.
   */
  version: string

  /**
   * Beta.
   */
  beta: boolean
}

/*
 * QuroBot class.
 */
export class QuroBot extends BotEventListenable implements QuroBotInterface {
  /**
   * Default QuroBot options.
   */
  static readonly defaultOptions: QuroBotOptions = {
    color: 0x2196f3,
    prefixes: ['$'],
    authorIds: [],
    version: '0.0.0',
    beta: false
  }

  /**
   * Registered components.
   */
  private components: ComponentInterface[] = []

  /**
   * Discord.js client.
   */
  readonly client: Client

  /**
   * Command manager.
   */
  protected readonly commandManager: CommandManager

  /**
   * Context.
   */
  readonly context: ContextInterface

  /**
   * Author ID.
   */
  private authorIds!: string[]

  /**
   * Default nickname.
   */
  nickname?: string

  /**
   * Bot version.
   */
  version!: string

  /**
   * Beta.
   */
  beta!: boolean

  /**
   * Primary bot color.
   */
  color!: number

  /**
   * Author.
   */
  get authors() {
    return this.client.users.filter(
      user => !!this.authorIds.find(id => user.id === id)
    )
  }

  /**
   * Command prefixes.
   */
  prefixes!: CommandPrefix[]

  /**
   * Commands.
   */
  commands: CommandInterface[]

  /**
   * QuroBot constructor.
   */
  constructor(options: Partial<QuroBotOptions> = QuroBot.defaultOptions) {
    // Call BotEventListenable constructor.
    super()

    // Apply bot options.
    this.applyOptions({ ...QuroBot.defaultOptions, ...options })

    // Initialize commands.
    this.commands = []

    // Instantiate client.
    this.client = new Client()

    // Set EventListenable client.
    this.setEventListenableClient(this.client)

    // Generate context.
    this.context = new ContextBuilder().setBot(this).build()

    /**
     * Set command manager and register as component.
     */
    this.commandManager = new CommandManager()
    this.registerComponent(this.commandManager)

    // にゃーん
    this.egg()

    // Setup bot.
    this.setup()
  }

  /**
   * にゃーん
   */
  protected egg() {
    this.registerCommand(new NyanCommand())
  }

  /**
   * Apply quro bot options.
   *
   * @param options
   */
  applyOptions(options: QuroBotOptions) {
    this.nickname = options.nickname
    this.version = options.version
    this.beta = options.beta
    this.color = options.color
    this.prefixes = options.prefixes
    this.authorIds = options.authorIds
  }

  /**
   * Setup.
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setup() {}

  /**
   * Install plugin.
   *
   * @param plugin
   */
  async use(plugin: QuroPluginInterface) {
    await plugin.install(this)
    return this
  }

  /**
   * Register a command.
   *
   * @param command
   */
  registerCommand(command: CommandInterface) {
    this.commands.push(command)
    this.registerComponent(command)
    return this
  }

  /**
   * Register commands.
   *
   * @param commands
   */
  registerCommands(commands: CommandInterface[]) {
    commands.forEach(command => this.registerCommand(command))
    return this
  }

  /**
   * Register component.
   *
   * @param component
   */
  private registerComponent(component: ComponentInterface) {
    this.components.push(component)
    component.setContext(this.context)
    component.onRegister()
  }

  /**
   * Mount all regsiterd components.
   */
  private async mountAllComponents() {
    const promises: PromiseOr<void>[] = []

    for (const component of this.components) {
      promises.push(component.onMounted())
    }

    await Promise.all(promises)
  }

  /**
   * Start bot with token.
   *
   * @param token
   */
  async start(token: string) {
    await this.mountAllComponents()
    this.client.login(token)
  }
}

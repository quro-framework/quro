import { QuroBotInterface } from '../../interfaces/QuroBot'
import { Client } from 'discord.js'
import { ComponentInterface } from '../../interfaces/Component'
import { ContextInterface } from '../../interfaces/Context'
import { ContextBuilder } from '../../classes/builders/ContextBuilder'
import { QuroPluginInterface } from '../../interfaces/QuroPlugin'
import { CommandInterface } from '../../interfaces/Command'
import { PromiseOr } from '../../types'

/*
 * QuroBot class.
 */
export class QuroBot implements QuroBotInterface {
  /**
   * Registered components.
   */
  private components: ComponentInterface[] = []

  /**
   * Discord.js client.
   */
  readonly client: Client

  /**
   * Context.
   */
  readonly context: ContextInterface

  /**
   * QuroBot constructor.
   */
  constructor() {
    this.client = new Client()
    this.context = new ContextBuilder().setBot(this).build()
    this.setup()
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

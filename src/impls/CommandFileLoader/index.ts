import { CommandFileLoaderInterface } from '../..'
import { promises as fs } from 'fs'
import { CommandInterface } from '../../interfaces'
import { isCommand } from '../../helpers'
import * as path from 'path'

/**
 * CommandFileLoaderOptiosn type.
 */
export type CommandFileLoaderOptions = {
  /**
   * File name matchers.
   */
  matchers: RegExp[]
  /**
   * Command filter.
   */
  filter: (command: CommandInterface) => boolean
}

/*
 * CommandFileLoader class.
 */
export class CommandFileLoader implements CommandFileLoaderInterface {
  /**
   * Default options.
   */
  static defaultOptions: CommandFileLoaderOptions = {
    matchers: [/\.ts$/, /\.js$/],
    filter: () => true
  }

  readonly options: CommandFileLoaderOptions

  /**
   * CommandFileLoader constructor.
   */
  constructor(
    options: Partial<
      CommandFileLoaderOptions
    > = CommandFileLoader.defaultOptions
  ) {
    this.options = {
      ...CommandFileLoader.defaultOptions,
      ...options
    }
  }

  /**
   * Load commands.
   *
   * @param directoryPath
   */
  async load(directoryPath: string) {
    return await this.importCommandsFromDirectoryFiles(directoryPath)
  }

  /**
   * Import commands from directory files.
   *
   * @param directoryPath
   */
  private async importCommandsFromDirectoryFiles(directoryPath: string) {
    const commands: CommandInterface[] = []

    const dirents = await fs.readdir(directoryPath, {
      withFileTypes: true
    })

    for (const dirent of dirents) {
      const direntPath = path.resolve(directoryPath, dirent.name)

      if (dirent.isDirectory()) {
        commands.push(
          ...(await this.importCommandsFromDirectoryFiles(direntPath))
        )
      } else if (this.checkFileName(dirent.name)) {
        commands.push(...(await this.importCommandsFromFile(direntPath)))
      }
    }

    return commands
  }

  /**
   * Import commands from file.
   *
   * @param filePath
   */
  private async importCommandsFromFile(filePath: string) {
    const exportedData = await import(filePath)
    const commands: CommandInterface[] = []

    for (const [, exported] of Object.entries(exportedData)) {
      if (!isCommand(exported)) continue
      if (!this.options.filter(exported)) continue
      commands.push(exported)
    }

    return commands
  }

  /**
   * Check file name.
   *
   * @param name
   */
  private checkFileName(name: string) {
    return this.options.matchers.every(matcher => matcher.test(name))
  }
}

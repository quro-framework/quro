import { CommandFileLoader, isCommand } from '../src'
import * as path from 'path'

describe('CommandFileLoader test', () => {
  it('Import commands', done => {
    const loader = new CommandFileLoader()
    loader
      .load(path.resolve(__dirname, './commandFileLoaderCases/ImportCommands'))
      .then(commands => {
        expect(commands.every(isCommand)).toBeTruthy()
        expect(commands.length).toBe(5)
      })
      .then(done)
  })
})

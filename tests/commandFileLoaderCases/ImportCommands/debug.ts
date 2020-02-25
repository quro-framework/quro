import { Command } from '../../../src'

class DebugA extends Command {
  onHandle() {
    return
  }
}

class DebugB extends Command {
  onHandle() {
    return
  }
}

export const debugA = new DebugA()

export const debugB = new DebugB()

export const number20 = 20

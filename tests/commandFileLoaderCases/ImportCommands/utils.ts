import { Command } from '../../../src'

class UtilA extends Command {
  onHandle() {
    return
  }
}

class UtilB extends Command {
  onHandle() {
    return
  }
}

export const utilA = new UtilA()

export const utilB = new UtilB()

export const number10 = 10

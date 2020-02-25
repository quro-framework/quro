import { Command } from '../../components'

/**
 * Returns whether value is a command class.
 *
 * @param value
 */
export function isCommandClass(value: any): value is typeof Command {
  return typeof value.prorotype.onHandle !== 'undefined'
}

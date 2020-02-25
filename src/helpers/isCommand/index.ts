import { CommandInterface } from '../../interfaces'

/**
 * Returns whether value is a command.
 *
 * @param value
 */
export function isCommand(value: any) {
  const typeCheck = <K extends keyof CommandInterface>(key: K, type: string) =>
    typeof value[key] === type

  if (!typeCheck('typeCheck', 'boolean')) return false
  if (!typeCheck('argDefs', 'object')) return false
  if (!typeCheck('name', 'string')) return false
  if (!typeCheck('aliases', 'object')) return false
  if (!typeCheck('description', 'string')) return false
  if (!typeCheck('hidden', 'boolean')) return false
  if (!typeCheck('exampleUsages', 'object')) return false
  if (!typeCheck('onHandle', 'function')) return false
  if (!typeCheck('onPipe', 'function')) return false

  return true
}

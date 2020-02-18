import { ArgType } from '../../types/ArgType'

/**
 * ArgType to string
 *
 * @param type
 */
export function argTypeToString(type: ArgType) {
  if (type === ArgType.Any) return 'any'
  if (type === ArgType.Boolean) return 'boolean'
  if (type === ArgType.Number) return 'number'
  if (type === ArgType.String) return 'string'

  return 'unkonwn'
}

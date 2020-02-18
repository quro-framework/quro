/**
 * Number to string.
 *
 * @param value
 */
export function numberToString(value: number) {
  return value.toString(10)
}

/**
 * String to string.
 *
 * @param value
 */
export function stringToString(value: string) {
  return `"${value}"`
}

/**
 * Boolean to string.
 *
 * @param value
 */
export function booleanToString(value: boolean) {
  return value ? 'true' : 'false'
}

/**
 * Value to string.
 *
 * @param value
 */
export function valueToString(value: any) {
  if (typeof value === 'number') return numberToString(value)
  if (typeof value === 'string') return stringToString(value)
  if (typeof value === 'boolean') return booleanToString(value)

  return value?.toString() || ''
}

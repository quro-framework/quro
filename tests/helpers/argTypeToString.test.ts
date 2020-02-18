import { ArgType } from '../../src/types/ArgType'
import { argTypeToString } from '../../src'

describe('argTypeToString test', () => {
  test('ArgType to string', () => {
    expect(argTypeToString(ArgType.Any)).toBe('any')
    expect(argTypeToString(ArgType.String)).toBe('string')
    expect(argTypeToString(ArgType.Number)).toBe('number')
    expect(argTypeToString(ArgType.Boolean)).toBe('boolean')
    expect(argTypeToString(-Infinity as ArgType)).toBe('unknown')
  })
})

import { valueToString } from '../../src'

describe('valueToString test', () => {
  test('Number to string', () => {
    expect(valueToString(10)).toBe('10')
    expect(valueToString(0xf)).toBe('15')
  })

  test('String to string', () => {
    expect(valueToString('hello')).toBe('"hello"')
  })

  test('Boolean to string', () => {
    expect(valueToString(true)).toBe('true')
    expect(valueToString(false)).toBe('false')
  })

  test('Object to string', () => {
    expect(valueToString({})).toBe('[object Object]')
  })

  test('Undefined to string', () => {
    expect(valueToString(undefined)).toBe('')
  })
})

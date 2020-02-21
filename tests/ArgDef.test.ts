import { ArgDef, ArgType } from '../src'

describe('ArgDef test', () => {
  test('Instantiate with full data', () => {
    const mode = new ArgDef({
      name: 'mode',
      type: ArgType.String,
      defaultValue: 'normal',
      expectedValues: ['easy', 'normal', 'hard'],
      exampleValue: 'hard',
      description: 'Game mode'
    })

    expect(mode.name).toBe('mode')
    expect(mode.type).toBe(ArgType.String)
    expect(mode.defaultValue).toBe('normal')
    expect(mode.expectedValues).toStrictEqual(['easy', 'normal', 'hard'])
    expect(mode.exampleValue).toBe('hard')
    expect(mode.description).toBe('Game mode')
  })

  test('Instantiate with minimal data', () => {
    const arg = new ArgDef()

    expect(arg.name).toBe('')
    expect(arg.type).toBe(ArgType.Any)
    expect(arg.defaultValue).toBeUndefined()
    expect(arg.expectedValues).toStrictEqual([])
    expect(arg.exampleValue).toBeUndefined()
    expect(arg.description).toBe('')
  })

  test('Validate any type', () => {
    const any = new ArgDef({ type: ArgType.Any })

    expect(any.validate('hello')).toBeTruthy()
    expect(any.validate(10)).toBeTruthy()
    expect(any.validate(false)).toBeTruthy()
  })

  test('Validate boolean type', () => {
    const boolean = new ArgDef({ type: ArgType.Boolean })

    expect(boolean.validate(true)).toBeTruthy()
    expect(boolean.validate(false)).toBeTruthy()
    expect(boolean.validate('')).toBeFalsy()
    expect(boolean.validate(10)).toBeFalsy()
  })

  test('Validate number type', () => {
    const number = new ArgDef({ type: ArgType.Number })

    expect(number.validate(10)).toBeTruthy()
    expect(number.validate(Infinity)).toBeTruthy()
    expect(number.validate(true)).toBeFalsy()
    expect(number.validate(false)).toBeFalsy()
    expect(number.validate('')).toBeFalsy()
  })

  test('Validate string type', () => {
    const string = new ArgDef({ type: ArgType.String })

    expect(string.validate('Hello')).toBeTruthy()
    expect(string.validate(10)).toBeFalsy()
    expect(string.validate(true)).toBeFalsy()
  })

  test('Validate unknown type', () => {
    const unknown = new ArgDef({ type: -Infinity as ArgType })

    expect(unknown.validate('Hello')).toBeFalsy()
    expect(unknown.validate(0)).toBeFalsy()
    expect(unknown.validate(true)).toBeFalsy()
    expect(unknown.validate(false)).toBeFalsy()
  })

  test('Validate expected values', () => {
    const mode = new ArgDef({
      type: ArgType.String,
      expectedValues: ['easy', 'normal', 'hard']
    })

    expect(mode.validate('easy')).toBeTruthy()
    expect(mode.validate('normal')).toBeTruthy()
    expect(mode.validate('hard')).toBeTruthy()

    expect(mode.validate('hello')).toBeFalsy()
  })
})

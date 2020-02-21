import { ContentParser, ContentParseTokenType } from '../src'

describe('ContentParser test', () => {
  test('Result should be start/end with the token', () => {
    const parser = new ContentParser()
    const tokens = parser.parse('')

    expect(tokens[0].type).toBe(ContentParseTokenType.ResultStart)
    expect(tokens[1].type).toBe(ContentParseTokenType.ResultEnd)
  })

  test('Parse command call', () => {
    const parser = new ContentParser()
    const tokens = parser.parse(`help`)

    expect(tokens[1].type).toBe(ContentParseTokenType.CommandCallStart)
    expect(tokens[1].commandName).toBe('help')
    expect(tokens[2].type).toBe(ContentParseTokenType.CommandCallEnd)
  })

  test('Parse command call with string argument', () => {
    const parser = new ContentParser()
    const tokens = parser.parse('reverse "Hello world"')

    expect(tokens[1].type).toBe(ContentParseTokenType.CommandCallStart)
    expect(tokens[1].commandName).toBe('reverse')
    expect(tokens[2].type).toBe(ContentParseTokenType.StringArgument)
    expect(tokens[2].stringValue).toBe('Hello world')
    expect(tokens[3].type).toBe(ContentParseTokenType.CommandCallEnd)
  })

  test('Parse command call with number argument', () => {
    const parser = new ContentParser()

    expect(parser.parse('cmd 10')[2].numberValue).toBe(10)
    expect(parser.parse('cmd 0xa0')[2].numberValue).toBe(0xa0)
  })

  test('Parse command call with boolean argument', () => {
    const parser = new ContentParser()

    expect(parser.parse('cmd true')[2].booleanValue).toBeTruthy()
    expect(parser.parse('cmd on')[2].booleanValue).toBeTruthy()

    expect(parser.parse('cmd false')[2].booleanValue).toBeFalsy()
    expect(parser.parse('cmd ooff')[2].booleanValue).toBeFalsy()
  })

  test('Parse command call with command name with space char', () => {
    const parser = new ContentParser()
    const tokens = parser.parse('c\\ m\\ d')

    expect(tokens[1].commandName).toBe('cmd')
  })

  test('Escape space string', () => {
    const parser = new ContentParser()
    const tokens = parser.parse('reverse Hello\\ world')

    expect(tokens[2].stringValue).toBe('Hello world')
  })

  test('Escape string char', () => {
    const parser = new ContentParser()
    const tokens = parser.parse('reverse "The program says \\"Hello world\\""')

    expect(tokens[2].stringValue).toBe('The program says "Hello world"')
  })

  test('Pipeline', () => {
    const parser = new ContentParser()
    const tokens = parser.parse('ping > suffix ms > tile')

    expect(tokens[1].type).toBe(ContentParseTokenType.CommandCallStart)
    expect(tokens[1].commandName).toBe('ping')
    expect(tokens[2].type).toBe(ContentParseTokenType.CommandCallEnd)

    expect(tokens[3].type).toBe(ContentParseTokenType.Pipeline)

    expect(tokens[4].type).toBe(ContentParseTokenType.CommandCallStart)
    expect(tokens[4].commandName).toBe('suffix')
    expect(tokens[5].type).toBe(ContentParseTokenType.StringArgument)
    expect(tokens[5].stringValue).toBe('ms')
    expect(tokens[6].type).toBe(ContentParseTokenType.CommandCallEnd)

    expect(tokens[7].type).toBe(ContentParseTokenType.Pipeline)

    expect(tokens[8].type).toBe(ContentParseTokenType.CommandCallStart)
    expect(tokens[8].commandName).toBe('tile')
    expect(tokens[9].type).toBe(ContentParseTokenType.CommandCallEnd)
  })

  test('String cap', () => {
    const parser = new ContentParser()
    const tokens = parser.parse(`reverse 'The program says "Hello world"'`)

    expect(tokens[2].stringValue).toBe('The program says "Hello world"')
  })
})

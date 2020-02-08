import { ContentParser, ContentParseTokenType } from '../src'

describe('ContentParser test', () => {
  test('Parse command call', () => {
    const parser = new ContentParser()
    const tokens = parser.parse(`help`)

    expect(tokens[0].type).toBe(ContentParseTokenType.CommandCallStart)
    expect(tokens[0].commandName).toBe('help')
    expect(tokens[1].type).toBe(ContentParseTokenType.CommandCallEnd)
  })
})

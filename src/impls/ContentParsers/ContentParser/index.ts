import { ContentParserInterface } from '../../../interfaces/ContentParser'
import { ContentParseTokenType, ContentParseToken } from '../../../types'

/*
 * ContentParser class.
 */
export class ContentParser implements ContentParserInterface {
  /**
   * Parse content.
   *
   * @param content
   */
  parse(content: string) {
    return [
      this.createToken(ContentParseTokenType.CommandCallStart, {
        commandName: 'help'
      }),
      this.createToken(ContentParseTokenType.CommandCallEnd)
    ]
  }

  private createToken(
    type: ContentParseTokenType,
    data?: Omit<ContentParseToken, 'type'>
  ) {
    const token: ContentParseToken = {
      type,
      ...data
    }

    return token
  }
}

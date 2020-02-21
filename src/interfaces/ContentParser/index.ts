import { ContentParseToken } from '../..'

/*
 * ContentParser interface.
 */
export interface ContentParserInterface {
  /**
   * Parse content.
   *
   * @param content
   */
  parse(content: string): ContentParseToken[]
}

import { ContentParseToken } from '../../types'

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

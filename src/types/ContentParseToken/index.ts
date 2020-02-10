import { ContentParseTokenType } from '../ContentParseTokenType'

/*
 * ContentParseToken type.
 */
export type ContentParseToken = {
  type: ContentParseTokenType
  commandName?: string
  stringValue?: string
  numberValue?: number
  booleanValue?: boolean
}

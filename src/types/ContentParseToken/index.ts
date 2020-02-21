import { ContentParseTokenType } from '..'

/*
 * ContentParseToken type.
 */
export type ContentParseToken = {
  type: ContentParseTokenType
  originalString: string
  argumentString?: string
  commandName?: string
  stringValue?: string
  numberValue?: number
  booleanValue?: boolean
}

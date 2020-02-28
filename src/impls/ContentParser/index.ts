import {
  ContentParserInterface,
  ContentParseTokenType,
  ContentParseToken
} from '../..'

/*
 * ContentParserState enum.
 */
export enum ContentParserState {
  CommandName,
  Argument
}

/**
 * ContentParser options type.
 */
export type ContentParserOptions = {
  pipelineChars: string[]
  escapeChars: string[]
  stringChars: string[]
  separatorChars: string[]
  trueStrings: string[]
  falseStrings: string[]
}

/*
 * ContentParser class.
 */
export class ContentParser implements ContentParserInterface {
  /**
   * ContentParser defualt options.
   */
  static defaultOptions: ContentParserOptions = {
    pipelineChars: ['>'],
    escapeChars: ['\\'],
    stringChars: [`"`, `'`],
    separatorChars: [' '],
    trueStrings: ['true', 'on'],
    falseStrings: ['false', 'off']
  }

  /**
   * Options.
   */
  options: ContentParserOptions

  /**
   * Constructor.
   *
   * @param options
   */
  constructor(
    options: Partial<ContentParserOptions> = ContentParser.defaultOptions
  ) {
    this.options = {
      ...ContentParser.defaultOptions,
      ...options
    }
  }

  /**
   * Parse content.
   *
   * @param content
   */
  parse(content: string) {
    const tokens = this.parseContent(content)

    tokens.unshift(this.createToken(ContentParseTokenType.ResultStart))
    tokens.push(this.createToken(ContentParseTokenType.ResultEnd))

    return tokens
  }

  /**
   * Parse content.
   *
   * @param content
   */
  private parseContent(content: string) {
    let state = ContentParserState.CommandName
    let isEscape = false
    let isString = false
    let stringCap = ''
    let buffer = ''
    let argumentString = ''

    const tokens: ContentParseToken[] = []
    const isState = (s: ContentParserState) => s === state
    const length = content.length

    for (let i = 0; i < length; ++i) {
      const char = content[i]
      let escapeCancled = false
      const isEnd = i === length - 1
      const isSeparator = this.isSeparatorChar(char)

      if (!isSeparator || isEscape || isString) {
        // Tokens.
        if (
          this.isStringChar(char) &&
          !isEscape &&
          (char === stringCap || !isString)
        ) {
          isString = !isString
          stringCap = char
        } else if (this.isEscapeChar(char) && !isEscape) {
          isEscape = true
        } else if (this.isPipelineChar(char) && !isEscape && !isString) {
          tokens.push(
            this.createToken(ContentParseTokenType.CommandCallEnd, {
              originalString: '',
              argumentString: argumentString.trim()
            })
          )
          tokens.push(this.createToken(ContentParseTokenType.Pipeline))
          state = ContentParserState.CommandName
        } else if (!(isSeparator && isState(ContentParserState.CommandName))) {
          buffer += char
          isEscape = false
          escapeCancled = true
        }
      }

      if (isState(ContentParserState.Argument)) {
        argumentString += char
      }

      if (isEnd || (isSeparator && !isEscape && !isString && !escapeCancled)) {
        // States.
        if (isState(ContentParserState.CommandName) && buffer !== '') {
          tokens.push(
            this.createToken(ContentParseTokenType.CommandCallStart, {
              commandName: buffer,
              originalString: buffer
            })
          )

          argumentString = ''
          state = ContentParserState.Argument
        } else if (isState(ContentParserState.Argument)) {
          tokens.push(this.parseArgument(buffer))
        }

        if (isEnd) {
          tokens.push(
            this.createToken(ContentParseTokenType.CommandCallEnd, {
              originalString: '',
              argumentString: argumentString.trim()
            })
          )
        }

        buffer = ''
        isEscape = false
      }
    }

    return tokens
  }

  /**
   * Parse argument and returns token.
   *
   * @param value
   */
  private parseArgument(value: string) {
    const numberValue = Number(value)

    if (!isNaN(numberValue)) {
      return this.createToken(ContentParseTokenType.NumberArgument, {
        numberValue,
        originalString: value
      })
    } else if (this.isTrueString(value)) {
      return this.createToken(ContentParseTokenType.BooleanArgument, {
        booleanValue: true,
        originalString: value
      })
    } else if (this.isFalseString(value)) {
      return this.createToken(ContentParseTokenType.BooleanArgument, {
        booleanValue: false,
        originalString: value
      })
    } else {
      return this.createToken(ContentParseTokenType.StringArgument, {
        stringValue: value,
        originalString: value
      })
    }
  }

  /**
   * Returns whether char is included in chars.
   *
   * @param chars
   * @param char
   */
  private checkContain(chars: string[], char: string) {
    return chars.findIndex(c => c === char) !== -1
  }

  /**
   * Returns whether is pipeline char.
   *
   * @param char
   */
  private isPipelineChar(char: string) {
    return this.checkContain(this.options.pipelineChars, char)
  }

  /**
   * Returns whether is escape char.
   *
   * @param char
   */
  private isEscapeChar(char: string) {
    return this.checkContain(this.options.escapeChars, char)
  }

  /**
   * Returns whether is string char.
   *
   * @param char
   */
  private isStringChar(char: string) {
    return this.checkContain(this.options.stringChars, char)
  }

  /**
   * Returns whether is separator char.
   *
   * @param char
   */
  private isSeparatorChar(char: string) {
    return this.checkContain(this.options.separatorChars, char)
  }

  /**
   * Returns whether is true string.
   *
   * @param string
   */
  private isTrueString(string: string) {
    return this.checkContain(this.options.trueStrings, string)
  }

  /**
   * Returns whether is false string.
   *
   * @param string
   */
  private isFalseString(string: string) {
    return this.checkContain(this.options.falseStrings, string)
  }

  /**
   * Create token.
   *
   * @param type
   * @param data
   */
  private createToken(
    type: ContentParseTokenType,
    data?: Omit<ContentParseToken, 'type'>
  ) {
    const token: ContentParseToken = {
      type,
      originalString: '',
      ...data
    }

    return token
  }
}

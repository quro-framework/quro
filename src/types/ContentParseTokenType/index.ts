/*
 * ContentParseTokenType enum.
 */
export enum ContentParseTokenType {
  ResultStart,
  ResultEnd,
  CommandCallStart,
  CommandCallEnd,
  StringArgument,
  NumberArgument,
  BooleanArgument,
  Pipeline,
  Unknown
}

import { ArgType } from '../../types/ArgType'
import { ArgTypeMap } from '../../types/ArgTypeMap'

/*
 * ArgDefInterface.
 */
export interface ArgDefInterface<
  Type extends ArgType,
  ValueType extends ArgTypeMap[Type]
> {
  /**
   * Typed value(Use type only)
   */
  typedValue: ValueType

  /**
   * Display name.
   */
  name: string

  /**
   * Argument type.
   */
  type: ArgType

  /**
   * Default value.
   */
  defaultValue?: ValueType

  /**
   * Excepted values.
   */
  expectedValues: ValueType[]

  /**
   * Example value.
   */
  exampleValue?: ValueType

  /**
   * Description.
   */
  description: string

  /**
   * Validate value.
   *
   * @param value
   */
  validate<T>(value: T): boolean
}

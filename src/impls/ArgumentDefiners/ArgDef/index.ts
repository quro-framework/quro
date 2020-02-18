import { ArgDefInterface } from '../../../interfaces/ArgDef'
import { ArgType } from '../../../types/ArgType'
import { ArgTypeMap } from '../../../types/ArgTypeMap'

/*
 * ArgDef class.
 */
export class ArgDef<Type extends ArgType, ValueType extends ArgTypeMap[Type]>
  implements ArgDefInterface<Type, ValueType> {
  /**
   * Typed value(Use type only)
   */
  typedValue!: ValueType

  /**
   * Display name.
   */
  name = ''

  /**
   * Argument type.
   */
  type!: ArgType

  /**
   * Default value.
   */
  defaultValue?: ValueType

  /**
   * Expected values.
   */
  expectedValues: ValueType[] = []

  /**
   * Example value.
   */
  exampleValue?: ValueType

  /**
   * Description.
   */
  description = ''

  /**
   * ArgDef constructor.
   *
   * @param data
   */
  constructor(
    data: {
      name?: string
      type?: Type
      defaultValue?: ValueType
      expectedValues?: ValueType[]
      exampleValue?: ValueType
      description?: string
    } = {}
  ) {
    this.name = data.name ?? ''
    this.type = data.type ?? ArgType.Any
    this.defaultValue = data.defaultValue
    this.expectedValues = data.expectedValues ?? []
    this.exampleValue = data.exampleValue
    this.description = data.description ?? ''
  }

  /**
   * Validate value.
   *
   * @param value
   */
  validate<T>(value: T) {
    return this.validateType(value) && this.validateWithExceptedValues(value)
  }

  /**
   * Validate type.
   *
   * @param value
   */
  private validateType<T>(value: T) {
    const type = this.type

    if (type === ArgType.Any) return true
    if (type === ArgType.Boolean) return typeof value === 'boolean'
    if (type === ArgType.Number) return typeof value === 'number'
    if (type === ArgType.String) return typeof value === 'string'

    return false
  }

  /**
   * Validate whether value is expected value.
   *
   * @param value
   */
  private validateWithExceptedValues<T>(value: T) {
    const expecteds = this.expectedValues

    // No expected values.
    if (expecteds.length === 0) return true

    return expecteds.findIndex(expected => expected === value) !== -1
  }
}

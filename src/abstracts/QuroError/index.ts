/*
 * QuroError class.
 */
export class QuroError<DataType = any> extends Error {
  /**
   * Error label.
   */
  label = ''

  /**
   * Data.
   */
  data: DataType

  /**
   * QuroError constructor.
   *
   * @param label
   * @param data
   */
  constructor(message = '', label = '', data: DataType = {} as any) {
    super(message)
    this.label = label
    this.data = data
  }
}

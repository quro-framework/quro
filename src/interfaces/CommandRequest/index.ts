/*
 * CommandRequest interface.
 */
export interface CommandRequestInterface {
  /**
   * Get argument by name.
   *
   * @param name
   */
  get<T>(name: string): T
}

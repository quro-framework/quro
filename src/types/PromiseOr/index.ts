/*
 * PromiseOr type.
 */
export type PromiseOr<T = void> = Promise<T> | T

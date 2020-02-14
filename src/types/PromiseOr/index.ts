/*
 * Awaitable type.
 */
export type Awaitable<T = void> = Promise<T> | T

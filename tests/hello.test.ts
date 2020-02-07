import { hello } from '../src'

describe('Hello test', () => {
  test('Hello should return greeting message.', () => {
    expect(hello('hota')).toBe('Hello hota')
  })
})

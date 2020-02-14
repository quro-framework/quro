import { CommandRequest } from '../src'

describe('CommandRequest test', () => {
  test('Get arguments', () => {
    const request = new CommandRequest({
      args: ['Hello world', 10, true]
    })

    expect(request.get<string>(0)).toBe('Hello world')
    expect(request.get<number>(1)).toBe(10)
    expect(request.get<boolean>(2)).toBe(true)
  })

  test('Get all arguments', () => {
    const request = new CommandRequest({
      args: ['Hello world', 10, true]
    })

    const [text, number, boolean] = request.all<[string, number, boolean]>()

    expect(text).toBe('Hello world')
    expect(number).toBe(10)
    expect(boolean).toBe(true)
  })
})

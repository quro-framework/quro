import { CommandRequest } from '../src'

describe('CommandRequest test', () => {
  test('Get arguments', () => {
    const request = new CommandRequest({
      args: {
        text: 'Hello world',
        number: 10,
        boolean: true
      }
    })

    expect(request.get<string>('text')).toBe('Hello world')
    expect(request.get<number>('number')).toBe(10)
    expect(request.get<boolean>('boolean')).toBe(true)
  })
})

describe('CommandRequest test', () => {
  test('Arguments', () => {
    const request = new CommandRequest({
      args: {
        text: 'Hello world',
        number: 10,
        boolean: true
      }
    })

    expect(request.get<string>('name')).toBe('Hello world')
    expect(request.get<number>('number')).toBe(10)
    expect(request.get<boolean>('boolean')).toBe(true)
  })
})

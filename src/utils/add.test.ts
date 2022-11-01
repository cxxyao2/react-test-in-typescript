import { addAsync } from './add'
// async test ok
beforeEach(() => {
  jest.useFakeTimers()
})

afterEach(() => {
  jest.useRealTimers()
})

test('addAsync 1, 1 equals 2', () => {
  const result = addAsync(1, 1)
  const expected = 2
  jest.runAllTimers()
  return expect(result).resolves.toBe(expected)
})

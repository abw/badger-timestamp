import { test, expect } from 'vitest'

// Adapter for running test written for Ava using Vitest
const t = {
  is: (input, expected) =>
    expect(input).toBe(expected),
  deepEqual: (input, expected) =>
    expect(input).toStrictEqual(expected),
  true: input =>
    expect(input).toBe(true),
  false: input =>
    expect(input).toBe(false),
}

const AvaVitest = (name, fn) =>
  test(name, () => fn(t))

export default AvaVitest
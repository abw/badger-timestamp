import test from './library/ava-vitest.js'
import { timestamp } from '../src/Timestamp.js'

test(
  'stringification',
  t => {
    const stamp = timestamp('2023-03-02 07:45:46')
    t.is( `${stamp}`, '2023-03-02 07:45:46')
  }
)

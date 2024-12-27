import test from './library/ava-vitest.js'
import { timestamp } from '../src/Timestamp'

test(
  'timestamp copy',
  t => {
    const stamp = timestamp('2022/08/09 01:02:03')
    const copy  = stamp.copy()
    t.is( copy.parts.year, 2022 )
    t.is( copy.parts.month, 8 )
    t.is( copy.parts.day, 9 )
    t.is( copy.parts.hours, 1 )
    t.is( copy.parts.minutes, 2 )
    t.is( copy.parts.seconds, 3 )
  }
)
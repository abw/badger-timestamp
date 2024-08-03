import test from './library/ava-vitest.js'
import { leapYear } from '../src/Timestamp.js'

test(
  '2021 is not a leap year',
  t => t.is( leapYear(2021), false )
)
test(
  '2022 is not a leap year',
  t => t.is( leapYear(2022), false )
)
test(
  '2024 is a leap year',
  t => t.is( leapYear(2024), true )
)
test(
  '1900 was not a leap year',
  t => t.is( leapYear(1900), false )
)
test(
  '2000 was a leap year',
  t => t.is( leapYear(2000), true )
)
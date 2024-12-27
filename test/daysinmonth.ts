import test from './library/ava-vitest.js'
import { daysInMonth } from '../src/Timestamp'

test(
  '31 days in January',
  t => t.is( daysInMonth(1, 2021), 31 )
)
test(
  '28 days in February 2023',
  t => t.is( daysInMonth(2, 2023), 28 )
)
test(
  '29 days in February 2024',
  t => t.is( daysInMonth(2, 2024), 29 )
)
test(
  '31 days in March',
  t => t.is( daysInMonth(3, 2024), 31 )
)
test(
  '30 days in April',
  t => t.is( daysInMonth(4, 2024), 30 )
)
test(
  '31 days in May',
  t => t.is( daysInMonth(5, 2024), 31 )
)
test(
  '30 days in June',
  t => t.is( daysInMonth(6, 2024), 30 )
)
test(
  '31 days in July',
  t => t.is( daysInMonth(7, 2024), 31 )
)
test(
  '31 days in August',
  t => t.is( daysInMonth(8, 2024), 31 )
)
test(
  '30 days in September',
  t => t.is( daysInMonth(9, 2024), 30 )
)
test(
  '31 days in October',
  t => t.is( daysInMonth(10, 2024), 31 )
)
test(
  '30 days in November',
  t => t.is( daysInMonth(11, 2024), 30 )
)
test(
  '31 days in December',
  t => t.is( daysInMonth(12, 2024), 31 )
)

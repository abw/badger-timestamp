import test from './library/ava-vitest.js'
import { range } from '@abw/badger-utils'
import { timestamp } from '../src/Timestamp'

test(
  'weekday() in English',
  t => {
    const s = timestamp('2022-08-15', { locale: 'en-gb' })
    t.is( s.weekdayName(), 'Monday' )
  }
)
test(
  'weekday() in French',
  t => {
    const s = timestamp('2022-08-15', { locale: 'fr-FR' })
    // note that by convention month names are not capitalised in French
    t.is( s.weekdayName(), 'lundi' )
    t.is( s.weekdayName('short'), 'lun.' )
  }
)
test(
  'weekday() in English with short format',
  t => {
    const s = timestamp('2022-08-15', { locale: 'en-gb' })
    t.is( s.weekdayName('short'), 'Mon' )
  }
)
test(
  'all week days',
  t => {
    t.is(
      range(14,20).map(
        d => timestamp(`2022-08-${d}`, { locale: 'en-gb' }).weekday()
      ).join(', '),
      '0, 1, 2, 3, 4, 5, 6'
    )
  }
)
test(
  'all week day names',
  t => {
    t.is(
      range(15,21).map(
        d => timestamp(`2022-08-${d}`, { locale: 'en-gb' }).weekdayName('short')
      ).join(', '),
      'Mon, Tue, Wed, Thu, Fri, Sat, Sun'
    )
  }
)

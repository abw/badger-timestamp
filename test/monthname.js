import { range } from '@abw/badger-utils';
import test from 'ava';
import { timestamp } from '../src/Timestamp.js'

test(
  "monthName() in English",
  t => {
    const s = timestamp('2022-09-08 07:06:05', { locale: 'en-gb' })
    t.is( s.monthName(), 'September' )
  }
);

test(
  "monthName() in French",
  t => {
    const s = timestamp('2022-09-08 07:06:05', { locale: 'fr-FR' })
    // note that by convention month names are not capitalised in French
    t.is( s.monthName(), 'septembre' )
    t.is( s.monthName('short'), 'sep' )
  }
);

test(
  "monthName() in English with short format",
  t => {
    const s = timestamp('2022-09-08 07:06:05', { locale: 'en-gb' })
    // note that the JS Intl.DateTimeFormat() function returns
    // September as "Sept" when all other months (and short week days)
    // are 3 letters.  This is inconsistent and annoying so I'm shortening
    // it to "Sep"
    t.is( s.monthName('short'), 'Sep' )
  }
);

test(
  "all month names",
  t => {
    t.is(
      range(1,12).map(
        m => timestamp(`2022-${m}-01`, { locale: 'en-gb' }).monthName('short')
      ).join(', '),
      "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"
    )
  }
);


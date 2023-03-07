# badger-timestamp

This is a simple module for parsing, manipulating and formatting
ISO8601 timestamps, e.g. `YYYY-MM-DD HH::MM::SS`.

It is a very simple implementation that is intended to be lightweight
alternative to more feature-rich packages like moment, luxon, dayjs,
etc.

The primary goal is to be able to convert between database timestamps
and human-readable strings, and to allow simple date adjustments,
e.g. + 1 year, + 3 months, etc.

It is implemented as a thin wrapper around the native JS Date object.

## Installation

Install `badger-timestamp` using your favourite package manager.

### npm

    npm add @abw/badger-timestamp

### pnpm

    pnpm add @abw/badger-timestamp

### yarn

    yarn add @abw/badger-timestamp

## Examples

The `timestamp()` function provides a convenient way to create a timestamp
object.

```js
import { timestamp } from '@abw/badger-timestamp'

// create a timestamp using different string formats
const ts1 = timestamp('2023-03-07 08:45:52')
const ts2 = timestamp('2023-03-07T08:45:52')
const ts3 = timestamp('2023/03/07 08.45.52')

// using a Date object
const date = new Date('2023-03-07T08:45:52');
const ts4  = timestamp(date);

// milliseconds since Unix epoch
const ts5 = timestamp(date.getTime());
const ts6 = timestamp({ ms: date.getTime() });

// Unix seconds since epoch
const seconds = Math.round(date.getTime() / 1000);
const ts7 = timestamp({ unix: seconds });

// using component values
const ts8 = timestamp({
  year:    2023,
  month:   3,
  date:    7,
  hours:   8,
  minutes: 45,
  seconds: 52
});
```

When called without any arguments it returns the current date and time.  Or
you can use the `now()` function.

```js
import { now } from '@abw/badger-timestamp'

const present = now();
```

Methods for getting various parts of the date and time.

```js
const ts = timestamp('2023-03-07 08:45:52');
ts.date();          // 2023-03-07
ts.date('/');       // 2023/03/07
ts.time();          // 08:45:52
ts.time('.');       // 08.45.52
ts.year();          // 2023
ts.month();         // 3
ts.day();           // 7
ts.hours();         // 8
ts.minutes();       // 45
ts.seconds();       // 52
```

Methods for setting various parts of the date and time.

```js
ts.year(2024);      // set year to 2024
ts.month(4);        // set month to 4 (April)
ts.day(8);          // set day to 8
ts.hours(9);        // set hours to 9
ts.minutes(46);     // set minutes to 46
ts.seconds(53);     // set seconds to 53
```

Methods for formatting parts of the timestamp.

```js
const ts = timestamp('2023-03-07 08:45:52');
ts.kebab();         // 2023-03-07-08-45-52
ts.kebabDate();     // 2023-03-07
ts.kebabTime();     // 08-45-52
ts.kebabDateTime(); // 20230307-084552
ts.snake();         // 2023_03_07_08_45_52
ts.snakeDate();     // 2023_03_07
ts.snakeTime();     // 08_45_52
ts.snakeDateTime(); // 20230307_084552
ts.squish();        // 20230307084552
ts.squishDate();    // 20230307
ts.squishTime();    // 084552
```

Methods for returning other information.

```js
ts.weekdayName();           // Tuesday
ts.weekdayName('short');    // Tue
ts.monthName();             // March
ts.monthName('short');      // Mar
```

Locale support (default is to use your current locale).

```js
const ts = timestamp('2023-03-07', { locale: 'fr-FR' })
ts.weekdayName();         // mardi
ts.weekdayName('short');  // mar.
ts.monthName();           // mars
ts.monthName('short');    // mar
```

Boolean date/time comparison.  The argument can be any of the formats accepted
by the constructor, e.g. string, Date object, another timestamp object.

```js
ts.equal('2023-03-07 08:45:52');
ts.before('2023-03-07 08:45:52');
ts.after('2023-03-07 08:45:52');
```

Adjusting timestamps.  You can specify a string using singular or plural
names (e.g. "year" or "years") with positive or negative values.  Wrap-around
is correctly handled (e.g. one day before "2023-02-01" is "2023-01-31").

```js
ts.adjust("1 year 3 months");
ts.adjust({ year: 1, months: 3 });
ts.adjust({ year: -1, months: -43 });
```

Note that adjustments mutate the original object so you might want to
call `copy()` first.

```js
const ts2 = ts.copy().adjust("1 year 3 months");
```

## Documentation

Read the [Manual](https://abw.github.io/badger-timestamp/docs/manual) for
examples of use and the [API documentation](https://abw.github.io/badger-timestamp/docs/identifiers.html) for
further details.

## Author

Andy Wardley <abw@wardley.org>
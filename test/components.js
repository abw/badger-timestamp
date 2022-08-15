import test from 'ava';
import { timestamp } from '../src/Timestamp.js'

//-----------------------------------------------------------------------------
// year
//-----------------------------------------------------------------------------
test(
  "year()",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.year(), 2022 )
    t.is( s.year(2023), 2023 )
    t.is( s.year(), 2023 )
  }
);

//-----------------------------------------------------------------------------
// month
//-----------------------------------------------------------------------------
test(
  "month()",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.month(), 9 )
    t.is( s.month(10), 10 )
    t.is( s.month(), 10 )
  }
);
test(
  "month() with underflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.month(0), 12 )
    t.is( s.month(), 12 )
    t.is( s.year(), 2021 )
  }
);
test(
  "month() with overflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.month(13), 1 )
    t.is( s.month(), 1 )
    t.is( s.year(), 2023 )
  }
);

//-----------------------------------------------------------------------------
// day
//-----------------------------------------------------------------------------
test(
  "day()",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.day(), 8 )
    t.is( s.day(10), 10 )
    t.is( s.day(), 10 )
  }
);
test(
  "day() with underflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.day(0), 31 )
    t.is( s.day(), 31 )
    t.is( s.month(), 8 )
  }
);
test(
  "day() with underflow to February",
  t => {
    const s = timestamp('2022-03-05 07:06:05')
    t.is( s.day(0), 28 )
    t.is( s.day(), 28 )
    t.is( s.month(), 2 )
  }
);
test(
  "day() with underflow to February in leap year",
  t => {
    const s = timestamp('2024-03-05 07:06:05')
    t.is( s.day(0), 29 )
    t.is( s.day(), 29 )
    t.is( s.month(), 2 )
  }
);
test(
  "day() with overflow",
  t => {
    const s = timestamp('2022-02-28 07:06:05')
    t.is( s.day(29), 1 )
    t.is( s.day(), 1 )
    t.is( s.month(), 3 )
  }
);
test(
  "day() with overflow from February in a leap year",
  t => {
    const s = timestamp('2024-02-28 07:06:05')
    t.is( s.day(29), 29 )
    t.is( s.day(), 29 )
    t.is( s.month(), 2 )
    t.is( s.day(30), 1 )
    t.is( s.day(), 1 )
    t.is( s.month(), 3 )
  }
);

//-----------------------------------------------------------------------------
// hours
//-----------------------------------------------------------------------------
test(
  "hours()",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.hours(), 7 )
    t.is( s.hours(9), 9 )
    t.is( s.hours(), 9 )
  }
);
test(
  "hours() with underflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.hours(0), 0)
    t.is( s.hours(-2), 22)
    t.is( s.hours(), 22 )
    t.is( s.day(), 7 )
  }
);
test(
  "hours() with overflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.hours(24), 0)
    t.is( s.day(), 9 )
    t.is( s.hours(25), 1)
    t.is( s.hours(), 1 )
    t.is( s.day(), 10 )
  }
);

//-----------------------------------------------------------------------------
// minutes
//-----------------------------------------------------------------------------
test(
  "minutes()",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.minutes(), 6 )
    t.is( s.minutes(50), 50 )
    t.is( s.minutes(), 50 )
  }
);
test(
  "minutes() with underflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.minutes(-4), 56)
    t.is( s.minutes(), 56 )
    t.is( s.hours(), 6 )
  }
);
test(
  "minutes() with overflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.minutes(60), 0)
    t.is( s.hours(), 8 )
    t.is( s.minutes(65), 5)
    t.is( s.minutes(), 5 )
    t.is( s.hours(), 9 )
  }
);

//-----------------------------------------------------------------------------
// seconds
//-----------------------------------------------------------------------------
test(
  "seconds()",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.seconds(), 5 )
    t.is( s.seconds(50), 50 )
    t.is( s.seconds(), 50 )
  }
);
test(
  "seconds() with underflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.seconds(-4), 56)
    t.is( s.seconds(), 56 )
    t.is( s.minutes(), 5 )
  }
);
test(
  "seconds() with overflow",
  t => {
    const s = timestamp('2022-09-08 07:06:05')
    t.is( s.seconds(60), 0)
    t.is( s.minutes(), 7 )
    t.is( s.seconds(65), 5)
    t.is( s.seconds(), 5 )
    t.is( s.minutes(), 8 )
  }
);

//-----------------------------------------------------------------------------
// Examples from manual
//-----------------------------------------------------------------------------
test(
  "example with overflowing month",
  t => {
    const ts = timestamp('2022-08-15 0-8:13:12');
    ts.month(13);
    t.is( ts.date(), '2023-01-15' );
  }
);

test(
  "example with overflowing day",
  t => {
    const ts = timestamp('2022-06-15');
    ts.day(31);
    t.is( ts.date(), '2022-07-01' );
  }
);

test(
  "example with overflowing hours",
  t => {
    const ts = timestamp('2022-06-30 14:14:15');
    ts.hours(25);
    t.is( ts.stamp(), '2022-07-01 01:14:15' );
  }
);

test(
  "example with overflowing minutes",
  t => {
    const ts = timestamp('2022-06-30 23:14:15');
    ts.minutes(65);
    t.is( ts.stamp(), '2022-07-01 00:05:15' );
  }
);

test(
  "example with overflowing seconds",
  t => {
    const ts = timestamp('2022-06-30 23:59:00');
    ts.seconds(65);
    t.is( ts.stamp(), '2022-07-01 00:00:05' );
  }
);

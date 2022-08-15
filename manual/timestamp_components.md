# Timestamp Components

- [year()](#year)
- [month()](#month)
- [day()](#day)
- [hours()](#day)
- [minutes()](#minutes)
- [seconds()](#seconds)
- [dateObject()](#dateObject)
- [epochSeconds()](#epochSeconds)
- [epochMilliseconds()](#epochMilliseconds)

## year()

Use the `year()` method to get or set the year.

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.year();      // 2022
ts.year(2023);  // 2023
ts.year();      // 2023
ts.date();      // 2023-08-15
```

## month()

Use the `month()` method to get or set the month.
It should be an integer from 1 (January) to 12 (December).

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.month();     // 8
ts.month(9);    // 9
ts.month();     // 9
ts.date();      // 2022-09-15
```

If you set the month to a value outside the range from 1 to 12 then
the date will be adjusted accordingly.  For example, setting the
month to 13 will cause the year to be incremented and the month will
be set to 1 (January).

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.month(13);   // 1
ts.month();     // 1
ts.date();      // 2023-01-15
```

## day()

Use the `day()` method to get or set the day.
It should be an integer from 1 to 31.

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.month();     // 8
ts.month(9);    // 9
ts.month();     // 9
ts.date();      // 2022-09-15
```

If you set the day to a value less than 1 or greater than the
number of days in the month, then the date will be adjusted
accordingly.  For example, setting the day to 31 in June
will result in the date being set to 1st July.

```js
const ts = timestamp('2022-06-15');
ts.day(31);     // 1
ts.day();       // 1
ts.date();      // 2022-07-01
```

## hours()

Use the `hours()` method to get or set the hours.
It should be an integer from 0 to 23.

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.hours();     // 8
ts.hours(9);    // 9
ts.hours();     // 9
ts.time();      // 09:13:12
```

If you set the hours to a value outside the range 0 to 23 then
then the time and date will be adjusted accordingly.  For example,
setting the hours to 25 on 30th June will result in the date being
set to 1st July and the hours to 1.

```js
const ts = timestamp('2022-06-30 13:14:15');
ts.hours(25);   // 1
ts.hours();     // 1
ts.stamp();     // 2022-07-01 01:14:15
```

## minutes()

Use the `minutes()` method to get or set the minutes.
It should be an integer from 0 to 59.

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.minutes();   // 13
ts.minutes(14); // 14
ts.minutes();   // 14
ts.time();      // 08:14:12
```

If you set the minutes to a value outside the range 0 to 59 then
then the time and date will be adjusted accordingly.  For example,
setting the minutes to 65 when the hour is 23 on 30th June will
result in the date being set to 1st July and the hours to 0.

```js
const ts = timestamp('2022-06-30 23:14:15');
ts.minutes(65); // 5
ts.hours();     // 0
ts.stamp();     // 2022-07-01 00:05:15
```

## seconds()

Use the `seconds()` method to get or set the seconds.
It should be an integer from 0 to 59.

```js
const ts = timestamp('2022-08-15 08:13:12');
ts.seconds();   // 12
ts.seconds(22); // 22
ts.seconds();   // 14
ts.time();      // 08:13:22
```

If you set the seconds to a value outside the range 0 to 59 then
then the time and date will be adjusted accordingly.  For example,
setting the seconds to 65 at 23:59:00 on 30th June will
result in the date being set to 1st July and the time to 00:00:05.

```js
const ts = timestamp('2022-06-30 23:59:00');
ts.seconds(65); // 5
ts.seconds();   // 5
ts.stamp();     // 2022-07-01 00:01:05
```

## dateObject()

This method returns the timestamp as a Javascript [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object.

## epochSeconds()

This method returns the number of seconds since the Unix Epoch at 00:00:00 on January 1st 1970.

## epochMilliseconds()

This method returns the number of milliseconds since the Unix Epoch at 00:00:00 on January 1st 1970.
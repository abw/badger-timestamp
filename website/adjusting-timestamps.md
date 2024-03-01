# Adjusting Timestamps

## adjust(change) {#adjust}

Use the `adjust()` method to adjust the date and/or time.
Pass an object containing adjustments to be made to one or
more of the date or time components.

```js
const ts = timestamp('2022-09-08 07:06:05');
ts.adjust({ year: 1 });  // 2023-09-08 07:06:05
```

Note that this method mutates the object.  Use the `copy()`
method first if you want to keep the original unmodified.

```js
const ts1 = timestamp('2022-09-08 07:06:05');
const ts2 = ts1.copy().adjust({ year: 1 });  // 2023-09-08 07:06:05
```

You can specify any of the date or time components in either singular
or plural form.  The values can be positive or negative.

```js
// singular names are OK
ts.adjust({
    year: 1, month: 2, day: 3, hour: 4, minute: 5, second: 6
});
// plural names are OK
ts.adjust({
    years: 1, months: 2, days: 3, hours: 4, minutes: 5, seconds: 6
});
// negative values are  OK
ts.adjust({
    years: -5, months: -24, days: -100, hours: -200, minutes: -300, seconds: -600
});
```

The method will correctly handle wrap-arounds, e.g. adding 100 days to the current
date will return the correct date 100 days from now.  The module only supports the
Gregorian calendar and will not work correctly for dates before September 1752 when
the calendar was introduced and
[11 days were 'lost'](https://www.historic-uk.com/HistoryUK/HistoryofBritain/Give-us-our-eleven-days/).

You can also pass a string to the `adjust()` method.

```js
ts.adjust("5 years");
```
As above, the units can be singular (e.g. `year`) or plural (e.g. `years`) and the
values can be positive or negative.

```js
ts.adjust("1 year");
ts.adjust("5 years");
ts.adjust("-5 years");
```

You can specify multiple items.  They can be separated by whitespace or any other non-word
characters.

```js
ts.adjust("1 year 2 months 3 days");
ts.adjust("1 year, 2 months, 3 days");
ts.adjust("1 year|2 months|3 days");
```

The pattern matching algorithm looks for a sequence of digits (with an optional leading
negative sign) and then a word.  Anything else will be ignored.

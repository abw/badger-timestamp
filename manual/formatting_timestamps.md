# Formatting Timestamps

- [Generating a Timestamp](#generating-a-timestamp)
- [Formatting the Date](#formatting-the-date)
- [Formatting the Time](#formatting-the-time)
- [Formatting Shortcuts](#formatting-shortcuts)
- [Weekday Name](#weekday-name)
- [Month Name](#month-name)

## Generating a Timestamp

Call the `stamp()` method to regenerate the timestamp as a string.

```js
const ts1 = timestamp('2022-08-12 08:16:24');
const ts2 = ts1.stamp();    // 2022-08-12 08:16:24
```

The configuration options `joint`, `dateJoint` and `timeJoint` can be used
to specify what strings are used to join the date and time (`joint`),
components of the date (`dateJoint`) and components of the time (`timeJoint`).

These can be passed in as configuration options when you create the timestamp.

```js
const ts1 = timestamp('2022-08-12 08:16:24', { dateJoint: '/', joint: 'T' });
const ts2 = ts1.stamp();    // 2022/08/12T08:16:24
```

Or as options passed to the `stamp()` method.

```js
const ts1 = timestamp('2022-08-12 08:16:24');
const ts2 = ts1.stamp({ dateJoint: '/', joint: 'T' });    // 2022/08/12T08:16:24
```

The `toString()` method is a wrapper around the `stamp()` method to
auto-stringify a timestamp.

```js
const ts = timestamp('2022-08-12 08:16:24');
console.log(`Now: ${ts}`);      // Now: 2022-08-12 08:16:24
```

## Formatting the Date

Call the `date()` method to format the date as a string.

```js
const ts = timestamp('2022-08-12 08:16:24');
const dt = ts.date();    // 2022-08-12
```

The method will use the `dateJoint` string to join components of the date.
This can be specified as a configuration option when creating the timestamp:

```js
const ts = timestamp('2022-08-12 08:16:24', { dateJoint: '/' });
const dt = ts.date();    // 2022/08/12
```

Or passed as an argument to the `date()` method:

```js
const ts = timestamp('2022-08-12 08:16:24');
const dt = ts.date('/');    // 2022/08/12
```

## Formatting the Time

Call the `time()` method to format the time as a string.

```js
const ts = timestamp('2022-08-12 08:16:24');
const tm = ts.time();    // 08:16:24
```

The method will use the `timeJoint` string to join components of the time.
This can be specified as a configuration option when creating the timestamp:

```js
const ts = timestamp('2022-08-12 08:16:24', { timeJoint: '::' });
const tm = ts.time();    // 08::16::24
```

Or passed as an argument to the `time()` method:

```js
const ts = timestamp('2022-08-12 08:16:24');
const tm = ts.time('::');    // 08::16::24
```

## Formatting Shortcuts

There are a number of shortcut methods for formatting the timestamp, date or
time in various ways.

The `kebab` methods use "kebab-case" with elements separated by hypens.

```js
const ts = timestamp('2023-03-07 08:17:25');

ts.kebab();         // 2023-03-07-08-17-25
ts.kebabDate();     // 2023-03-07
ts.kebabTime();     // 08-17-25
ts.kebabDateTime(); // 20230307-081725
```

The `snake` methods use "snake-case" with elements separated by underscores.

```js
const ts = timestamp('2023-03-07 08:17:25');

ts.snake();         // 2023_03_07_08_17_25
ts.snakeDate();     // 2023_03_07
ts.snakeTime();     // 08_17_25
ts.snakeDateTime(); // 20230307_081725
```

The `squish` methods squish elements together.

```js
const ts = timestamp('2023-03-07 08:17:25');

ts.squish();        // 20230307081725
ts.squishDate();    // 20230307
ts.squishTime();    // 081725
```

## Weekday Name

The `weekday()` method returns the day of the week as an integer from 0 (Sunday)
to 6 (Saturday).

The `weekdayName()` method returns the day of the week as a string.

```js
timestamp('2022-08-15').weekdayName();  // Monday
```

An optional argument can be provided as a format.  This defaults to `long` but can
be set to `short` for a 3 letter abbreviation of the name.

```js
timestamp('2022-08-15').weekdayName('short');  // Mon
```

The method will use the current local which defaults to `default` and will use
the current locale for your browser or machine.  You can specify a locale as a
configuration option for the timestamp.

```js
const ts = timestamp('2022-08-15', { locale: 'fr-FR' })
ts.weekdayName();         // lundi
ts.weekdayName('short');  // lun.
```

## Month Name

The `monthName()` method returns the day of the month as a string.

```js
timestamp('2022-09-15').monthName();  // September
```

An optional argument can be provided as a format.  This defaults to `long` but can
be set to `short` for a 3 letter abbreviation of the month.

```js
timestamp('2022-09-15').monthName('short');  // Sep
```

The method will use the current local which defaults to `default` and will use
the current locale for your browser or machine.  You can specify a locale as a
configuration option for the timestamp.

```js
const ts = timestamp('2022-09-15', { locale: 'fr-FR' })
ts.monthName();         // septembre
ts.monthName('short');  // sep
```
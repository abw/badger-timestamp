# Formatting Timestamps

- [Generating a Timestamp](#generating-a-timestamp)
- [Formatting the Date](#formatting-the-date)
- [Formatting the Time](#formatting-the-time)

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

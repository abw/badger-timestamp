# Creating Timestamps

- [Valid Formats](#valid-formats)
- [Now is the Time](#now-is-the-time)
- [Copy Constructor](#copy-constructor)
- [Date Constructor](#date-constructor)
- [Javascript Epoch Time](#javascript-epoch-time)
- [Unix Epoch Time](#unix-epoch-time)
- [Component Object](#component-object)
- [Configuration Options](#configuration-options)

## Valid Formats

The module is reasonable flexible about what it considers to be a
valid timestamp string.

For example, you can use a space to separate the date and time.

```js
const ts = timestamp('2022-08-12 08:16:24');
```

Or you can use any other non-numerical characters as separators in the
date and/or time.

```js
const ts = timestamp('2022/08/12 08.16.24');
```

The only requirement is that the date should have:

* 4 digits for the year
* 1 or 2 digits for the month
* 1 or 2 digits for the day

And the time should have:

* 1 or 2 digits for the hours (24 hour clock only)
* 2 digits for the minutes
* 2 digits for the seconds

And non-numerical character can be used as separators in the date and time.
Use either a space or the `T` character to separate the date and time.

You can also omit the time altogether if you just want to represent a date.

```js
const date = timestamp('2022-08-12');
```

If you don't mind taking a bit of a gamble then you can pass in a different
time string and hope that the implementation of the `Date.parse()` function
on the platform you're using can parse it.

```js
const ts = timestamp('12 August 2022 09:01:02');
```

## Now is the Time

If you don't provide a timestamp string then it will default to the current
date and time.

```js
const now = timestamp();
```

## Copy Constructor

You can create a timestamp by passing an existing timestamp object.

```js
const now1 = timestamp();
const now2 = timestamp(now1);
```

You can also use the `copy()` method to create a copy of a timestamp.

```js
const now1 = timestamp();
const now2 = now1.copy();
```

## Date Constructor

You can create a timestamp by passing an existing [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object.

```js
const date = new Date('2022-08-12T09:05:12');
const ts   = timestamp(date);
```

## Javascript Epoch Time

In the land of Javascript, dates can be represented by the number
of *milliseconds* since the Unix epoch of January 1st 1970.  This is
the value returned by the
[getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
method of the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
object.

Pass an integer number of milliseconds to the `timestamp()` function
to use this value.

```js
const date = new Date('2022-08-12T09:05:12');
const ms   = date.getTime();
const ts   = timestamp(ms);
```

Or, if being explicit is your thing, pass an object with the milliseconds
defined as the `ms` value.

```js
const date = new Date('2022-08-12T09:05:12');
const ts   = timestamp({ ms: date.getTime() });
```

## Unix Epoch Time

In the land of Unix, they use *seconds* since the Unix epoch rather than
milliseconds.

Pass an object with a `unix` number of seconds into the `timestamp()` function
to use this value.

```js
const ts = timestamp({ unix: 123456789 });
```

## Component Object

The final way to create a timestamp is to pass an object containing
`year`, `month`, `day`, and optionally, `hours`, `minutes` and `seconds`.

Note that by convention, the date components are all singular (e.g. `year` not
`years`) and the time components are all plural (e.g. `minutes` not `minute`).
I don't know why we do this, but that's what we do.

Also note that the `month` ranges from 1 to 12, in keeping with the human convention,
rather than 0 to 11 to pander to the computers.

```js
const ts = timestamp({
  year:    2022,
  month:   8,
  date:    12,
  hours:   9,
  minutes: 17,
  seconds: 32
});
```

## Configuration Options

A second argument can be passed to the `timestamp()` function (or the `Timestamp` constructor)
as an object containing configuration options.

These can include:

* `joint` - (default: ' ') the value used to join date and time
* `dateJoint` - (default: '-') the value used to join date elements
* `timeJoint` - (default: ':') the value used to join time elements

These are used by the `date()`, `time()` and `stamp()` functions used to format
the timestamp, or parts of it, as strings.  They do not affect how the module
parses timestamps.
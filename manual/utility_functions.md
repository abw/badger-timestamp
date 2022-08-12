# Utility Functions

- [Assertion Function](#assertion-functions)
- [Parsing Function](#parsing-functions)
- [Formatting Function](#formatting-functions)
- [Miscellaneous Function](#miscellaneous-functions)

## Assertion Functions

### isTimestamp(ts)

Function to determine if a string matches a timestamp format.

### isDate(date)

Function to determine if a variable is a `Date` object.

## Parsing Functions

### splitTimestamp(string)

Parses a timestamp string and return an object containing the component parts:
`year`, `month`, `day`, `hours`, `minutes` and `seconds`.

### unpackDate(date)

Unpacks the items from a `Date` object and returns an object containing the
component parts: `year`, `month`, `day`, `hours`, `minutes` and `seconds`.

### unpackNow()

Creates a `Date` object for the current time then calls `unpackDate()` to
unpack it into constituent parts.

### parseDate(string)

Passes a string the `Date.parse()` constructor and then calls `unpackDate()`
to unpack it into constituent parts.

### parseDuration(string)

Parses a duration string (e.g. `1 year 3 months`) and returns an object containing
the consituent parts (e.g. `{ year: 1, month: 3 }`).  Note that this always returns
components in singular form (e.g. `year` and `month`) regardless of how they were
specified in the string.

### singularDurations(durations)

Function to convert an object containing any plural duration units (e.g. `hours`) to
the singular counterpart (e.g. `hour`).

## Formatting Functions

### joinDate(timestamp, joint)

Function to join the constituent parts of a date.

### joinTime(timestamp, joint)

Function to join the constituent parts of a time.

### joinTimestamp(timestamp, config)

Function to format a timestamp string from a `Timestamp` object.
The `config` options can be used to override the default values
for `joint`, `dateJoint` and/or `timeJoint`.

## Miscellaneous Functions

### daysInMonth(month, year)

Return the number of days in a month.

### leapYear(year)

Returns a boolean value indicating if a year is a leap year.

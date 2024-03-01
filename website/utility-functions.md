---
outline: deep
---

# Utility Functions

## Assertion Functions

### isTimestamp(ts) {#isTimestamp}

Function to determine if a string matches a timestamp format.

### isDate(date) {#isDate}

Function to determine if a variable is a `Date` object.

## Parsing Functions

### splitTimestamp(string) {#splitTimestamp}

Parses a timestamp string and return an object containing the component parts:
`year`, `month`, `day`, `hours`, `minutes` and `seconds`.

### unpackDate(date) {#unpackDate}

Unpacks the items from a `Date` object and returns an object containing the
component parts: `year`, `month`, `day`, `hours`, `minutes` and `seconds`.

### unpackNow() {#unpackNow}

Creates a `Date` object for the current time then calls `unpackDate()` to
unpack it into constituent parts.

### parseDate(string) {#parseDate}

Passes a string the `Date.parse()` constructor and then calls `unpackDate()`
to unpack it into constituent parts.

### parseDuration(string) {#parseDuration}

Parses a duration string (e.g. `1 year 3 months`) and returns an object containing
the consituent parts (e.g. `{ year: 1, month: 3 }`).  Note that this always returns
components in singular form (e.g. `year` and `month`) regardless of how they were
specified in the string.

### singularDurations(durations) {#singularDurations}

Function to convert an object containing any plural duration units (e.g. `hours`) to
the singular counterpart (e.g. `hour`).

## Formatting Functions

### joinDate(timestamp, joint) {#joinDate}

Function to join the constituent parts of a date.

### joinTime(timestamp, joint) {#joinTime}

Function to join the constituent parts of a time.

### joinTimestamp(timestamp, config) {#joinTimestamp}

Function to format a timestamp string from a `Timestamp` object.
The `config` options can be used to override the default values
for `joint`, `dateJoint` and/or `timeJoint`.

## Miscellaneous Functions

### daysInMonth(month, year) {#daysInMonth}

Return the number of days in a month.

### leapYear(year) {#leapYear}

Returns a boolean value indicating if a year is a leap year.

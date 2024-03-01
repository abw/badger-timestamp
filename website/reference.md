# Reference

## Constructor Functions

Functions to create Timestamp objects.

| Function | Description |
|-|-|
|[`timestamp(ts)`](creating-timestamps#timestamp)|Create a new timestamp object|
|[`now()`](creating-timestamps#now)|Create a new timestamp for the current date/time|

## Timestamp Methods

Methods for getting and setting parts of a Timestamp object.

| Method | Description |
|-|-|
|[`copy()`](creating-timestamps#copy)|Create a copy of a timestamp object|
|[`year()`](timestamp-components#year)|Get or set the year|
|[`month()`](timestamp-components#month)|Get or set the month|
|[`day()`](timestamp-components#day)|Get or set the day|
|[`hours()`](timestamp-components#hours)|Get or set the hours|
|[`minutes()`](timestamp-components#minutes)|Get or set the minutes|
|[`seconds()`](timestamp-components#seconds)|Get or set the seconds|
|[`epochSeconds()`](timestamp-components#epochSeconds)|Return the seconds since the epoch|
|[`epochMilliseconds()`](timestamp-components#epochMilliseconds)|Return the milliseconds since the epoch|
|[`dateObject()`](timestamp-components#dateObject)|Return a Date object|

## Formatting Methods

Methods for formatting a Timestamp object.

| Method | Description |
|-|-|
|[`stamp()`](formatting-timestamps#stamp)|Return the Timestamp in ISO8601 format|
|[`toString()`](formatting-timestamps#toString)|Alias for `stamp()` for auto-stringification|
|[`date()`](formatting-timestamps#date)|Return the formatted date|
|[`time()`](formatting-timestamps#time)|Return the formatted time|
|[`weekday()`](formatting-timestamps#weekday)|Return the weekday number|
|[`weekdayName()`](formatting-timestamps#weekdayName)|Return the weekday name|
|[`monthName()`](formatting-timestamps#monthName)|Return the month name|
|[`kebab()`](formatting-timestamps#kebab)|Return the timestamp in kebab case, e.g. `2024-03-01-11-14-01`|
|[`kebabDate()`](formatting-timestamps#kebab)|Return the date in kebab case, e.g. `2024-03-01`|
|[`kebabTime()`](formatting-timestamps#kebab)|Return the time in kebab case, e.g. `11-14-01`|
|[`kebabDateTime()`](formatting-timestamps#kebab)|Return the date and time in kebab case, e.g. `20240301-111401`|
|[`snake()`](formatting-timestamps#snake)|Return the timestamp in snake case, e.g. `2024_03_01_11_14_01`|
|[`snakeDate()`](formatting-timestamps#snake)|Return the date in snake case, e.g. `2024_03_01`|
|[`snakeTime()`](formatting-timestamps#snake)|Return the time in snake case, e.g. `11_14_01`|
|[`snakeDateTime()`](formatting-timestamps#snake)|Return the date and time in snake case, e.g. `20240301_111401`|
|[`squish()`](formatting-timestamps#squish)|Return the date and time squished together e.g. `20240301111401`|
|[`squishDate()`](formatting-timestamps#squish)|Return the date squished together, e.g. `20240301`|
|[`squishTime()`](formatting-timestamps#squish)|Return the time squished together, e.g. `111401`|

## Adjustment Methods

Methods for adjusting a Timestamp object.

| Method | Description |
|-|-|
|[`adjust(change)`](adjusting-timestamps#adjust)|Adjust the Timestamp|

## Comparison Methods

Methods for comparing Timestamps.

| Method | Description |
|-|-|
|[`compare(ts)`](comparing-timestamps#compare)|Compare the Timestamp with another one|
|[`equal(ts)`](comparing-timestamps#equal)|Test if the Timestamp is equal to another one|
|[`before(ts)`](comparing-timestamps#before)|Test if the Timestamp is before another one|
|[`after(ts)`](comparing-timestamps#after)|Test if the Timestamp is after another one|
|[`notBefore(ts)`](comparing-timestamps#notBefore)|Test if the Timestamp is not before another one|
|[`notAfter(ts)`](comparing-timestamps#notAfter)|Test if the Timestamp is not after another one|

## Utility Functions

Utility function used internally or for your own use.

| Function | Description |
|-|-|
|[`isTimestamp(ts)`](utility-functions#isTimestamp)|Test if the argument matches a timestamp format|
|[`isDate(date)`](utility-functions#isDate)|Test if the argument is a Date object|
|[`splitTimestamp(ts)`](utility-functions#splitTimestamp)|Split a timestamp string into component parts|
|[`unpackDate(date)`](utility-functions#unpackDate)|Extract the component parts from a Date object|
|[`unpackNow()`](utility-functions#unpackNow)|Extract the component parts from a Date object for the current date/time|
|[`parseDate(date)`](utility-functions#parseDate)|Parse a date string using `Date.parse()` and unpack|
|[`parseDuration(dur)`](utility-functions#parseDuration)|Parse a duration string, e.g. `3 months`|
|[`singularDurations(dur)`](utility-functions#singularDurations)|Convert plural durations to singular form, e.g. `hours` to `hour`|
|[`joinDate(ts)`](utility-functions#joinDate)|Join a Timestamp date into a string|
|[`joinTime(ts)`](utility-functions#joinTime)|Join a Timestamp time into a string|
|[`joinTimestamp(ts)`](utility-functions#joinTimestamp)|Join a Timestamp into a string|
|[`daysInMonth(month, year)`](utility-functions#daysInMonth)|Returns the number of days in a month|
|[`leapYear(year)`](utility-functions#leapYear)|Determine if a year is a leap year|

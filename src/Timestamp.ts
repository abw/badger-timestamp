import {
  hasValue, isInteger, isObject, isString, noValue,
  fail, doNothing
} from '@abw/badger-utils'
import {
  Comparison, DurationParts, DurationPlurals, Logger,
  TimestampMilliseconds,
  TimestampOptions, TimestampParts, TimestampProps, TimestampSource,
  TimestampUnix
} from './types'

const MATCH_DATE  = '(\\d{4})\\D(\\d{1,2})\\D(\\d{1,2})'
const MATCH_TIME  = '(\\d{1,2})\\D(\\d{2})\\D(\\d{2})'
const MATCH_STAMP = `^\\s*${MATCH_DATE}(?:(?:T|\\s)${MATCH_TIME})?`
const STAMP_REGEX = new RegExp(MATCH_STAMP)
const STAMP_PARTS = [undefined, 'year', 'month', 'day', 'hours', 'minutes', 'seconds']
const DURATIONS   = ['year', 'month', 'day', 'hour', 'minute', 'second']
const PLURALS     = { hour: 'hours', minute: 'minutes', second: 'seconds' }



/**
 * Default configuration options.
 */
const defaults: TimestampProps = {
  joint:     ' ',
  dateJoint: '-',
  timeJoint: ':',
  locale:    'default',
}

/**
 * The Timestamp class implements an object for parsing, manipulating
 * and formatting ISO8601 timestamps.
 */
export class Timestamp {
  props: TimestampProps
  parts: TimestampParts
  debug: Logger

  /**
   * Constructor for Timestamp object.
   * @param {string|number|Date|Object} [ts] - timestamp
   * @param {Object} [options] - configuration options
   * @param {string} [options.joint=' '] - joining character between date and time parts
   * @param {string} [options.dateJoint='-'] - joining character for date segments
   * @param {string} [options.timeJoint=':'] - joining character for time segments
   * @param {string} [options.locale='default'] - locale for formatting dates and times
   */
  constructor(ts: TimestampSource, options?: TimestampOptions) {
    const props = { ...defaults, ...options }
    this.props = props

    this.debug = props.debug
      ? console.log.bind(console)
      : doNothing

    if (noValue(ts)) {
      // use current time if no argument provided
      this.parts = unpackNow()
    }
    else if (ts instanceof Timestamp) {
      // copy constructor
      this.parts = { ...ts.parts }
    }
    else if (isTimestamp(ts as string)) {
      // split timestamp string
      this.parts = splitTimestamp(ts as string)
    }
    else if (isString(ts as string)) {
      // parse another date string
      this.parts = parseDate(ts as string)
    }
    else if (isDate(ts)) {
      // unpack a Date object
      this.parts = unpackDate(ts as Date)
    }
    else if (isInteger(ts as number)) {
      // milliseconds since the epoch
      this.parts = parseDate(ts as number)
    }
    else if (isObject(ts)) {
      if (hasValue((ts as TimestampUnix).unix)) {
        // seconds since unix epoch time, multiply by 1000 to get JS milliseconds
        this.parts = parseDate((ts as TimestampUnix).unix * 1000)
      }
      else if (hasValue((ts as TimestampMilliseconds).ms)) {
        // milliseconds since unix epoch time
        this.parts = parseDate((ts as TimestampMilliseconds).ms)
      }
      else {
        // object containing year, month, day, etc.
        this.parts = ts as TimestampParts
      }
    }
    else {
      fail(`Invalid timestamp: ${ts}`)
    }
  }

  /**
   * Method to return a new object as a copy of the current object
   * @return {Timestamp} - new `Timestamp` object
   */
  copy(): Timestamp {
    return new Timestamp(this.parts)
  }

  //--------------------------------------------------------------------------
  // Methods to set/get constituent parts
  //--------------------------------------------------------------------------
  /**
   * Method to get or set the year.
   * @param {number} [year] - optional new value for year
   * @return {number} - the year
   */
  year(year?: number): number {
    if (hasValue(year)) {
      this.parts.year = year
    }
    return this.parts.year
  }

  /**
   * Method to get or set the month.
   * @param {number} [month] - optional new value for month
   * @return {number} - the month
   */
  month(month?: number): number {
    if (hasValue(month)) {
      this.parts.month = month
      this.correct()
    }
    return this.parts.month
  }

  /**
   * Method to get or set the day.
   * @param {number} [day] - optional new value for day
   * @return {number} - the day
   */
  day(day?: number): number {
    if (hasValue(day)) {
      this.parts.day = day
      this.correct()
    }
    return this.parts.day
  }

  /**
   * Method to get or set the hours.
   * @param {number} [hours] - optional new value for hours
   * @return {number} - the hours
   */
  hours(hours?: number): number {
    if (hasValue(hours)) {
      this.parts.hours = hours
      this.correct()
    }
    return this.parts.hours
  }

  /**
   * Method to get or set the minutes.
   * @param {number} [minutes] - optional new value for minutes
   * @return {number} - the minutes
   */
  minutes(minutes?: number): number {
    if (hasValue(minutes)) {
      this.parts.minutes = minutes
      this.correct()
    }
    return this.parts.minutes
  }

  /**
   * Method to get or set the seconds.
   * @param {number} [seconds] - optional new value for seconds
   * @return {number} - the seconds
   */
  seconds(seconds?: number): number {
    if (hasValue(seconds)) {
      this.parts.seconds = seconds
      this.correct()
    }
    return this.parts.seconds
  }

  //--------------------------------------------------------------------------
  // Conversion to other formats
  //--------------------------------------------------------------------------
  /**
   * Method to return a `Date` object
   * @return {Date} - new date object
   */
  dateObject(): Date {
    return new Date(
      this.stamp({ joint: 'T', dateJoint: '-', timeJoint: ':' })
    )
  }
  /**
   * Method to return the number of millseconds since the Unix epoch
   * @return {number} - the number of milliseconds
   */
  epochMilliseconds(): number {
    return this.dateObject().getTime()
  }
  /**
   * Method to return the number of seconds since the Unix epoch
   * @return {number} - the number of seconds
   */
  epochSeconds(): number {
    return Math.floor(this.epochMilliseconds() / 1000)
  }

  //--------------------------------------------------------------------------
  // Formatting
  //--------------------------------------------------------------------------
  /**
   * Method to return a formatted timestamp string in the form `YYYY-MM-DD HH:MM:SS`.
   * @param {Object} [options] - configuration options
   * @param {string} [options.joint=' '] - joining character between date and time parts
   * @param {string} [options.dateJoint='-'] - joining character for date segments
   * @param {string} [options.timeJoint=':'] - joining character for time segments
   * @return {string} - formatted date/time stamp
   */
  stamp(options: TimestampOptions={}): string {
    return joinTimestamp(
      this.parts,
      { ...this.props, ...options }
    )
  }

  /**
   * Auto-stringification method as a wrapper around {@link stamp()}.
   * @param {Object} [options] - configuration options
   * @param {string} [options.joint=' '] - joining character between date and time parts
   * @param {string} [options.dateJoint='-'] - joining character for date segments
   * @param {string} [options.timeJoint=':'] - joining character for time segments
   * @return {string} - formatted date/time stamp
   */
  toString(options?: TimestampOptions): string {
    return this.stamp(options)
  }

  /**
   * Method to return a formatted date string in the form `YYYY-MM-DD`.
   * @param {string} [joint='-'] - optional joining character
   * @return {string} - formatted date string
   */
  date(joint:string=this.props.dateJoint): string {
    return joinDate(this.parts, joint)
  }

  /**
   * Method to return a formatted time string in the form `HH:MM:SS`.
   * @param {string} [joint=':''] - optional joining character
   * @return {string} - formatted time string
   */
  time(joint:string=this.props.timeJoint): string {
    return joinTime(this.parts, joint)
  }

  /**
   * Method to return the timestamp in kebab-case `YYYY-MM-DD-hh-mm-ss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  kebab(): string {
    return joinTimestamp(
      this.parts,
      { joint: '-', dateJoint: '-', timeJoint: '-' }
    )
  }

  /**
   * Method to return the date and time in kebab-case `YYYYMMDD-hhmmss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  kebabDateTime(): string {
    return joinTimestamp(
      this.parts,
      { joint: '-', dateJoint: '', timeJoint: '' }
    )
  }

  /**
   * Method to return the date in kebab-case `YYYY-MM-DD` regardless of any options.
   * @return {string} - formatted date string
   */
  kebabDate(): string {
    return joinDate(this.parts, '-')
  }

  /**
   * Method to return the time in kebab-case `hh-mm-ss` regardless of any options.
   * @return {string} - formatted time string
   */
  kebabTime(): string {
    return joinTime(this.parts, '-')
  }

  /**
   * Method to return the timestamp in snake-case `YYYY_MM_DD_hh_mm_ss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  snake(): string {
    return joinTimestamp(
      this.parts,
      { joint: '_', dateJoint: '_', timeJoint: '_' }
    )
  }

  /**
   * Method to return the date and time in snake-case `YYYYMMDD_hhmmss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  snakeDateTime(): string {
    return joinTimestamp(
      this.parts,
      { joint: '_', dateJoint: '', timeJoint: '' }
    )
  }

  /**
   * Method to return the date in snake-case `YYYY_MM_DD` regardless of any options.
   * @return {string} - formatted date string
   */
  snakeDate(): string {
    return joinDate(this.parts, '_')
  }

  /**
   * Method to return the time in snake-case `hh_mm_ss` regardless of any options.
   * @return {string} - formatted time string
   */
  snakeTime(): string {
    return joinTime(this.parts, '_')
  }

  /**
   * Method to return the timestamp squished together as `YYYYMMDDhhmmss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  squish(): string {
    return joinTimestamp(
      this.parts,
      { joint: '', dateJoint: '', timeJoint: '' }
    )
  }

  /**
   * Method to return the date squished together as `YYYYMMDD` regardless of any options.
   * @return {string} - formatted date string
   */
  squishDate(): string {
    return joinDate(this.parts, '')
  }

  /**
   * Method to return the time squished together as `hhmmss` regardless of any options.
   * @return {string} - formatted time string
   */
  squishTime(): string {
    return joinTime(this.parts, '')
  }

  /**
   * Method to return the month name.
   * @param {string} [format='long'] - optional format: `full`, `long`, `medium`, `short`
   * @return {string} - the month name
   */
  monthName(format: string = 'long'): string {
    const mon = this.dateObject().toLocaleString(
      this.props.locale,
      { month: format } as Intl.DateTimeFormatOptions
    )
    // for some insane reason which I can't fathom, the short format
    // returns 3 letter words for every month (Jan, Feb, Mar, etc),
    // except September which is returned as "Sept". To avoid this
    // inconsistency I'm shortening it to "Sep".
    return format === 'short'
      ? mon.slice(0, 3)
      : mon
  }

  /**
   * Method to return the weekday name as a number from 0 (Sunday) to 6 (Saturday)
   * @return {number} - the weekday number
   */
  weekday(): number {
    return this.dateObject().getDay()
  }

  /**
   * Method to return the weekday name.
   * @param {string} [format='long'] - optional format: `full`, `long`, `medium`, `short`
   * @return {string} - the weekday name
   */
  weekdayName(format: string = 'long'): string {
    return this.dateObject().toLocaleString(
      this.props.locale,
      { weekday: format } as Intl.DateTimeFormatOptions
    )
  }

  //--------------------------------------------------------------------------
  // Adjustment
  //--------------------------------------------------------------------------
  /**
   * Method to adjust the timestamp.  The duration can be specified as a string containing
   * one or more items to adjust in either singular or plural form, e.g. `"1 year, 1 month"`,
   * `"2 years 2 months"`, etc. Or it can be specified as an object: `{ year: 1, month: 1 }`,
   * `{ years: 2, months: 2 }`, etc.  Any overflow or underflow will be corrected by the
   * {@link correct()} method.
   * @param {string|Object} duration - a string or object of adjustments
   * @example
   * ts.adjust("1 year 2 months 3 hours")
   * @example
   * ts.adjust({ year: 1, months: 2, hours: 3 })
   */
  adjust(duration: string | DurationPlurals): Timestamp {
    const p = this.parts
    const d = isString(duration)
      ? parseDuration(duration as string)               // parse string to object
      : singularDurations(duration as DurationPlurals)  // convert plurals (e.g. "hours") to singular form (e.g. "hour")
    DURATIONS.forEach(
      unit => {
        const value = d[unit]
        if (hasValue(value)) {
          // By convention we store date elements in singular (year, month, day) and time
          // elements in plural (hours, minutes, seconds), but we convert all durations to
          // singluar in parseDuration() and singularDuration() (because it's easier to drop
          // an 's' from the end of plural than optionally add one.  Here we use the PLURALS
          // lookup table to map singular hour, minute and second back to their plurals.
          p[PLURALS[unit]||unit] += value
        }
      }
    )
    return this.correct()
  }
  /**
   * Method to correct any underflow or overflow in the timestamp.  For example, if the
   * month is set to 13 then it will be set to 1 and the year will be incremented.
   */
  correct(): Timestamp {
    const p = this.parts

    // time underflow
    while (p.seconds < 0) {
      p.seconds += 60
      p.minutes--
    }
    while (p.minutes < 0) {
      p.minutes += 60
      p.hours--
    }
    while (p.hours < 0) {
      p.hours += 24
      p.day--
    }

    // time overflow
    if (p.seconds > 59) {
      p.minutes += Math.floor(p.seconds / 60)
      p.seconds %= 60
    }
    if (p.minutes > 59) {
      p.hours += Math.floor(p.minutes / 60)
      p.minutes %= 60
    }
    if (p.hours > 23) {
      p.day += Math.floor(p.hours / 24)
      p.hours %= 24
    }

    // date underflow
    while (p.day <= 0) {
      p.month--
      if (p.month <= 0) {
        p.month += 12
        p.year--
      }
      p.day += daysInMonth(p.month, p.year)
    }
    while (p.month <= 0) {
      p.month += 12
      p.year--
    }

    // month overflow
    while (p.month > 12) {
      p.month -= 12
      p.year++
    }

    // day overflow
    let dim: number
    while (p.day > (dim = daysInMonth(p.month, p.year))) {
      p.day -= dim
      if (p.month == 12) {
        p.month = 1
        p.year++
      }
      else {
        p.month++
      }
    }

    return this
  }

  //--------------------------------------------------------------------------
  // Comparison
  //--------------------------------------------------------------------------
  /**
   * Method to compare the timestamp to another.  The arguments can be any that are accepted
   * by the constructor.
   * one or more items to adjust in either singular or plural form, e.g. `"1 year, 1 month"`,
   * `"2 years 2 months"`, etc. Or it can be specified as an object: `{ year: 1, month: 1 }`,
   * `{ years: 2, months: 2 }`, etc.
   * @param {TimestampSource} ts - any argument accepted by the constructor
   * @param {TimestampOptions} options - additional configuration options
   * @return {Comparison} - -1 if the timestamp is before the comparator, 0 if it's equal, +1 if it's after.
   */
  compare(ts: TimestampSource, options?: TimestampOptions): Comparison {
    const that = new Timestamp(ts, options)
    const thisParts = this.parts
    const thatParts = that.parts

    for (const p of STAMP_PARTS) {
      if (p) {
        if (thisParts[p] < thatParts[p]) {
          this.debug('[%s] this[%s] < that[%s]', p, thisParts[p], thatParts[p])
          return -1
        }
        else if (thisParts[p] > thatParts[p]) {
          this.debug('[%s] this[%s] > that[%s]', p, thisParts[p], thatParts[p])
          return 1
        }
        else {
          this.debug('[%s] this[%s] = that[%s]', p, thisParts[p], thatParts[p])
        }
      }
    }
    return 0
  }
  /**
   * Method to compare one timestamp to another for equality
   * @param {TimestampSource} ts - any argument accepted by the constructor
   * @param {TimestampOptions} options - additional configuration options
   * @return {boolean} - true if the timestamp is equal to the operand
   */
  equal(ts: TimestampSource, options?: TimestampOptions): boolean {
    return this.compare(ts, options) == 0
  }
  /**
   * Method to test for the timestamp coming before another timestamp
   * @param {TimestampSource} ts - any argument accepted by the constructor
   * @param {TimestampOptions} options - additional configuration options
   * @return {boolean} - true if the timestamp is before the operand
   */
  before(ts: TimestampSource, options?: TimestampOptions): boolean {
    return this.compare(ts, options) == -1
  }
  /**
   * Method to test for the timestamp coming after another timestamp
   * @param {TimestampSource} ts - any argument accepted by the constructor
   * @param {TimestampOptions} options - additional configuration options
   * @return {boolean} - true if the timestamp is after the operand
   */
  after(ts: TimestampSource, options?: TimestampOptions): boolean {
    return this.compare(ts, options) == 1
  }
  /**
   * Method to test for the timestamp being equal to or coming after another timestamp
   * @param {TimestampSource} ts - any argument accepted by the constructor
   * @param {TimestampOptions} options - additional configuration options
   * @return {boolean} - true if the timestamp is equal to or coming after the operand
   */
  notBefore(ts: TimestampSource, options?: TimestampOptions): boolean {
    return this.compare(ts, options) >= 0
  }
  /**
   * Method to test for the timestamp being equal to or coming before another timestamp
   * @param {TimestampSource} ts - any argument accepted by the constructor
   * @param {TimestampOptions} options - additional configuration options
   * @return {boolean} - true if the timestamp is equal to or coming before the operand
   */
  notAfter(ts: TimestampSource, options?: TimestampOptions): boolean {
    return this.compare(ts, options) <= 0
  }
  /**
   * Method to test for the timestamp being in the past.
   * @return {boolean} - true if the timestamp is before the current time
   */
  inThePast(): boolean {
    return this.before(now())
  }
  /**
   * Method to test for the timestamp being in the past.
   * @return {boolean} - true if the timestamp is before the current time
   */
  inTheFuture() {
    return this.after(now())
  }
}

//--------------------------------------------------------------------------
// Utility functions
//--------------------------------------------------------------------------
/**
 * Function to determine is a string is a valid timestamp.
 * @param {string} ts - timestamp string
 * @return {boolean} - value indicating if the string is a timestamp
 */
export const isTimestamp = (ts: string): boolean =>
  isString(ts) && Boolean(ts.match(STAMP_REGEX))

/**
 * Function to split a timestamp into its constituent parts
 * @param {string} ts - timestamp string
 * @return {TimestampParts} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const splitTimestamp = (ts: string): TimestampParts => {
  const match = ts.match(STAMP_REGEX) || fail('Invalid timestamp: ', ts)
  const result: TimestampParts = {
    year:   0,
    month:  0,
    day:    0
  }
  STAMP_PARTS.forEach(
    (part, n) => {
      if (part && match[n]) {
        result[part] = parseInt(match[n])
      }
    }
  )
  // console.log('%s => ', ts, result);
  return result
}

/**
 * Function to determine is a valid is a `Date` object
 * @param {any} date - date object or other value
 * @return {boolean} - value indicating if the `date` is a `Date` object
 */
export const isDate = (date: unknown): boolean =>
  date instanceof Date

/**
 * Function to return an object containing the constituent timestamp parts for the current time.
 * @return {TimestampParts} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const unpackNow = (): TimestampParts =>
  unpackDate(new Date())

/**
 * Function to return an object containing the constituent timestamp parts for a date/time.
 * @param {string|Date} date - date object or string that can be parsed by `Date.parse()`
 * @return {Object} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const parseDate = (date: string | number | Date): TimestampParts =>
  unpackDate(new Date(date))

/**
 * Function to return an object containing the constituent timestamp parts for a `Date` object
 * @param {Date} date - date object
 * @return {TimestampParts} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const unpackDate = (date: Date): TimestampParts => ({
  year:    date.getFullYear(),
  month:   date.getMonth() + 1,
  day:     date.getDate(),
  hours:   date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds(),
})

/**
 * Function to parse a duration string, e.g. `1 hour 3 minutes`.
 * Quantities must be integers. Units can be singular (e.g. `hour`) or plural (e.g. `hours`).
 * Other characters may appear between sections, e.g. `1 hour, 2 minutes and 3 seconds`.
 * @param {string} duration - duration string
 * @return {DurationParts} - object containing any of `year`, `month`, `day`, `hour`, `minute` and `second`.
 */
export const parseDuration = (duration: string): DurationParts => {
  const match = duration.matchAll(/(-?\d+)\s*(\w+)/g)
  const result = { }

  for (const m of match) {
    const n = parseInt(m[1])           // convert quantity to integer
    const d = m[2].replace(/s$/, '')   // convert plural to singular
    result[d] = n
  }
  return weeksToDays(result)
}

/**
 * Function to convert an object containing any plural duration units (e.g. `hours`) to the singular counterpart (e.g. `hour`).
 * @param {DurationPlurals} duration - object containing duration elements, either plural or singular.
 * @return {DurationParts} - object containing any of `year`, `month`, `day`, `hour`, `minute` and `second`.
 */
export const singularDurations = (duration: DurationPlurals): DurationParts => {
  const result = { }
  Object.entries(duration).forEach(
    ([key, value]) => {
      result[key.replace(/s$/, '')] = value
    }
  )
  return weeksToDays(result)
}

/**
 * Function to convert an object containing a number of weeks (as `week`) into
 * multiples of 7 days, added onto any current number of days (as `day`).
 * @param {DurationPlurals} duration - object containing duration elements, including `week`
 * @return {DurationPlurals} - object containing any of `year`, `month`, `day`, `hour`, `minute` and `second`.
 */
export const weeksToDays = (duration: DurationPlurals): DurationPlurals => {
  if (duration.week) {
    duration.day = (duration.day || 0) + duration.week * 7
    delete duration.week
  }
  return duration
}

/**
 * Function to join the constituent parts of a time stamp into a string
 * @param {TimestampParts} ts - object containing `year`, `month`, `day`, and optionally, `hours`, `minutes` and `seconds`.
 * @param {string} ts.year - the year as an integer
 * @param {string} ts.month - the month as an integer from 1 to 12
 * @param {string} ts.day - the month as an integer
 * @param {string} [ts.hours] - the hours as an integer from 0 to 23
 * @param {string} [ts.minutes] - the minutes as an integer from 0 to 59
 * @param {string} [ts.seconds] - the seconds as an integer from 0 to 59
 * @param {Object} [config] - optional configuration options
 * @param {string} [config.joint=' '] - joining character between date and time parts
 * @param {string} [config.dateJoint='-'] - joining character for date segments
 * @param {string} [config.timeJoint=':'] - joining character for time segments
 * @return {string} - timestamp string of the form `YYYY-MM-DD` or `YYYY-MM-DD HH:MM:SS`
 */
export const joinTimestamp = (ts: TimestampParts, config:TimestampOptions ={}): string => {
  const date = joinDate(ts, config.dateJoint)

  if (hasValue(ts.hours)) {
    const time = joinTime(ts, config.timeJoint)
    return [date, time].join(hasValue(config.joint) ? config.joint : defaults.joint)
  }
  else {
    return date
  }
}

/**
 * Function to join the constituent parts of a date
 * @param {TimestampParts} ts - object containing `year`, `month`, `day`
 * @param {string} ts.year - the year as an integer
 * @param {string} ts.month - the month as an integer from 1 to 12
 * @param {string} ts.day - the month as an integer
 * @param {string} [joint='-'] - optional joining character for date segments
 * @return {string} - date string of the form `YYYY-MM-DD`
 */
export const joinDate = (ts: TimestampParts, joint=defaults.dateJoint): string =>
  [
    String(ts.year).padStart(4, '0'),
    String(ts.month).padStart(2, '0'),
    String(ts.day).padStart(2, '0'),
  ].join(joint)

/**
 * Function to join the constituent parts of a time into a string
 * @param {TimestampParts} ts - object containing `hours`, `minutes` and `seconds`.
 * @param {string} ts.hours - the hours as an integer from 0 to 23
 * @param {string} ts.minutes - the minutes as an integer from 0 to 59
 * @param {string} ts.seconds - the seconds as an integer from 0 to 59
 * @param {string} [joint=':'] - optional joining character for time segments
 * @return {string} - time string of the form `HH:MM:SS`
 */
export const joinTime = (ts: TimestampParts, joint: string=defaults.timeJoint): string =>
  [
    String(ts.hours).padStart(2, '0'),
    String(ts.minutes).padStart(2, '0'),
    String(ts.seconds).padStart(2, '0'),
  ].join(joint)


/**
 * Function to return the number of days in a month.
 * @param {number} month - the month as an integer from 1 to 12
 * @param {number} year - the year as an integer, e.g. 2022
 * @return {number} - the number of days in the month: 28, 29, 30 or 31
 */
export const daysInMonth = (month: number, year: number): number => {
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30
  }
  else if (month == 2) {
    return leapYear(year) ? 29 : 28
  }
  else {
    return 31
  }
}

/**
 * Function to determine if a year is a leap year
 * @param {number} year - the year as an integer, e.g. 2022
 * @return {boolean} - true if the year is a leap year or false otherwise
 */
export const leapYear = (year: number): boolean => {
  if (year % 4) {
    return false
  }
  else if (year % 400 === 0) {
    return true
  }
  else if (year % 100 === 0) {
    return false
  }
  else {
    return true
  }
}


/**
 * Function to create a new `Timestamp` object
 * @param {TimestampSource} ts - timestamp
 * @param {TimestampOptions} [options] - configuration options
 * @param {string} [options.joint=' '] - joining character between date and time parts
 * @param {string} [options.dateJoint='-'] - joining character for date segments
 * @param {string} [options.timeJoint=':'] - joining character for time segments
 * @return {Timestamp} - a `Timestamp` object
 */
export const timestamp = (ts?: TimestampSource, options?: TimestampOptions): Timestamp =>
  new Timestamp(ts, options)

/**
 * Function to create a new `Timestamp` object for the current date/time
 * @param {TimestampOptions} [options] - configuration options
 * @param {string} [options.joint=' '] - joining character between date and time parts
 * @param {string} [options.dateJoint='-'] - joining character for date segments
 * @param {string} [options.timeJoint=':'] - joining character for time segments
 * @return {Timestamp} - a `Timestamp` object
 */
export const now = (options?: TimestampOptions) : Timestamp =>
  new Timestamp(null, options)

export default Timestamp
import {
  hasValue, isInteger, isObject, isString, noValue,
  fail, doNothing
} from '@abw/badger-utils'

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
const defaults = {
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
  /**
   * Constructor for Timestamp object.
   * @param {string|number|Date|Object} [ts] - timestamp
   * @param {Object} [options] - configuration options
   * @param {string} [options.joint=' '] - joining character between date and time parts
   * @param {string} [options.dateJoint='-'] - joining character for date segments
   * @param {string} [options.timeJoint=':'] - joining character for time segments
   * @param {string} [options.locale='default'] - locale for formatting dates and times
   */
  constructor(ts, options) {
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
    else if (isTimestamp(ts)) {
      // split timestamp string
      this.parts = splitTimestamp(ts)
    }
    else if (isString(ts)) {
      // parse another date string
      this.parts = parseDate(ts)
    }
    else if (isDate(ts)) {
      // unpack a Date object
      this.parts = unpackDate(ts)
    }
    else if (isInteger(ts)) {
      // milliseconds since the epoch
      this.parts = parseDate(ts)
    }
    else if (isObject(ts)) {
      if (hasValue(ts.unix)) {
        // seconds since unix epoch time, multiply by 1000 to get JS milliseconds
        this.parts = parseDate(ts.unix * 1000)
      }
      else if (hasValue(ts.ms)) {
        // milliseconds since unix epoch time
        this.parts = parseDate(ts.ms)
      }
      else {
        // object containing year, month, day, etc.
        this.parts = ts
      }
    }
    else {
      fail('Invalid timestamp: ', ts)
    }
  }

  /**
   * Method to return a new object as a copy of the current object
   * @return {Object} - new `Timestamp` object
   */
  copy() {
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
  year(year) {
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
  month(month) {
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
  day(day) {
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
  hours(hours) {
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
  minutes(minutes) {
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
  seconds(seconds) {
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
  dateObject() {
    return new Date(this.stamp({ joint: 'T', dateJoint: '-', timeJoint: ':' }))
  }
  /**
   * Method to return the number of millseconds since the Unix epoch
   * @return {number} - the number of milliseconds
   */
  epochMilliseconds() {
    return this.dateObject().getTime()
  }
  /**
   * Method to return the number of seconds since the Unix epoch
   * @return {number} - the number of seconds
   */
  epochSeconds() {
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
  stamp(options={}) {
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
  toString(options) {
    return this.stamp(options)
  }

  /**
   * Method to return a formatted date string in the form `YYYY-MM-DD`.
   * @param {string} [joint='-'] - optional joining character
   * @return {string} - formatted date string
   */
  date(joint=this.props.dateJoint) {
    return joinDate(this.parts, joint)
  }

  /**
   * Method to return a formatted time string in the form `HH:MM:SS`.
   * @param {string} [joint=':''] - optional joining character
   * @return {string} - formatted time string
   */
  time(joint=this.props.timeJoint) {
    return joinTime(this.parts, joint)
  }

  /**
   * Method to return the timestamp in kebab-case `YYYY-MM-DD-hh-mm-ss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  kebab() {
    return joinTimestamp(
      this.parts,
      { joint: '-', dateJoint: '-', timeJoint: '-' }
    )
  }

  /**
   * Method to return the date and time in kebab-case `YYYYMMDD-hhmmss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  kebabDateTime() {
    return joinTimestamp(
      this.parts,
      { joint: '-', dateJoint: '', timeJoint: '' }
    )
  }

  /**
   * Method to return the date in kebab-case `YYYY-MM-DD` regardless of any options.
   * @return {string} - formatted date string
   */
  kebabDate() {
    return joinDate(this.parts, '-')
  }

  /**
   * Method to return the time in kebab-case `hh-mm-ss` regardless of any options.
   * @return {string} - formatted time string
   */
  kebabTime() {
    return joinTime(this.parts, '-')
  }

  /**
   * Method to return the timestamp in snake-case `YYYY_MM_DD_hh_mm_ss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  snake() {
    return joinTimestamp(
      this.parts,
      { joint: '_', dateJoint: '_', timeJoint: '_' }
    )
  }

  /**
   * Method to return the date and time in snake-case `YYYYMMDD_hhmmss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  snakeDateTime() {
    return joinTimestamp(
      this.parts,
      { joint: '_', dateJoint: '', timeJoint: '' }
    )
  }

  /**
   * Method to return the date in snake-case `YYYY_MM_DD` regardless of any options.
   * @return {string} - formatted date string
   */
  snakeDate() {
    return joinDate(this.parts, '_')
  }

  /**
   * Method to return the time in snake-case `hh_mm_ss` regardless of any options.
   * @return {string} - formatted time string
   */
  snakeTime() {
    return joinTime(this.parts, '_')
  }

  /**
   * Method to return the timestamp squished together as `YYYYMMDDhhmmss` regardless of any options.
   * @return {string} - formatted date/time string
   */
  squish() {
    return joinTimestamp(
      this.parts,
      { joint: '', dateJoint: '', timeJoint: '' }
    )
  }

  /**
   * Method to return the date squished together as `YYYYMMDD` regardless of any options.
   * @return {string} - formatted date string
   */
  squishDate() {
    return joinDate(this.parts, '')
  }

  /**
   * Method to return the time squished together as `hhmmss` regardless of any options.
   * @return {string} - formatted time string
   */
  squishTime() {
    return joinTime(this.parts, '')
  }

  /**
   * Method to return the month name.
   * @param {string} [format='long'] - optional format: `full`, `long`, `medium`, `short`
   * @return {string} - the month name
   */
  monthName(format='long') {
    const mon = this.dateObject().toLocaleString(
      this.props.locale,
      { month: format }
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
  weekday() {
    return this.dateObject().getDay()
  }

  /**
   * Method to return the weekday name.
   * @param {string} [format='long'] - optional format: `full`, `long`, `medium`, `short`
   * @return {string} - the weekday name
   */
  weekdayName(format='long') {
    return this.dateObject().toLocaleString(
      this.props.locale,
      { weekday: format }
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
  adjust(duration) {
    let p = this.parts
    const d = isString(duration)
      ? parseDuration(duration)         // parse string to object
      : singularDurations(duration)    // convert plurals (e.g. "hours") to singular form (e.g. "hour")
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
  correct() {
    let p = this.parts

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
    let dim
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
   * @param {Array} args - any argument(s) accepted by the constructor
   * @return {number} - -1 if the timestamp is before the comparator, 0 if it's equal, +1 if it's after.
   */
  compare(...args) {
    const that  = new Timestamp(...args)
    const thisp = this.parts
    const thatp = that.parts

    for (let p of STAMP_PARTS) {
      if (p) {
        if (thisp[p] < thatp[p]) {
          this.debug('[%s] this[%s] < that[%s]', p, thisp[p], thatp[p])
          return -1
        }
        else if (thisp[p] > thatp[p]) {
          this.debug('[%s] this[%s] > that[%s]', p, thisp[p], thatp[p])
          return 1
        }
        else {
          this.debug('[%s] this[%s] = that[%s]', p, thisp[p], thatp[p])
        }
      }
    }
    return 0
  }
  /**
   * Method to compare one timestamp to another for equality
   * @param {Array} args - any argument(s) accepted by the constructor
   * @return {boolean} - true if the timestamp is equal to the operand
   */
  equal(...args) {
    return this.compare(...args) == 0
  }
  /**
   * Method to test for the timestamp coming before another timestamp
   * @param {Array} args - any argument(s) accepted by the constructor
   * @return {boolean} - true if the timestamp is before the operand
   */
  before(...args) {
    return this.compare(...args) == -1
  }
  /**
   * Method to test for the timestamp coming after another timestamp
   * @param {Array} args - any argument(s) accepted by the constructor
   * @return {boolean} - true if the timestamp is after the operand
   */
  after(...args) {
    return this.compare(...args) == 1
  }
  /**
   * Method to test for the timestamp being equal to or coming after another timestamp
   * @param {Array} args - any argument(s) accepted by the constructor
   * @return {boolean} - true if the timestamp is equal to or coming after the operand
   */
  notBefore(...args) {
    return this.compare(...args) >= 0
  }
  /**
   * Method to test for the timestamp being equal to or coming before another timestamp
   * @param {Array} args - any argument(s) accepted by the constructor
   * @return {boolean} - true if the timestamp is equal to or coming before the operand
   */
  notAfter(...args) {
    return this.compare(...args) <= 0
  }
  /**
   * Method to test for the timestamp being in the past.
   * @return {boolean} - true if the timestamp is before the current time
   */
  inThePast() {
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
export const isTimestamp = ts =>
  isString(ts) && ts.match(STAMP_REGEX)

/**
 * Function to split a timestamp into its constituent parts
 * @param {string} ts - timestamp string
 * @return {Object} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const splitTimestamp = ts => {
  const match = ts.match(STAMP_REGEX) || fail('Invalid timestamp: ', ts)
  let result = { }
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
 * @param {Date} date - date object or other value
 * @return {boolean} - value indicating if the `date` is a `Date` object
 */
export const isDate = date =>
  date instanceof Date

/**
 * Function to return an object containing the constituent timestamp parts for the current time.
 * @return {Object} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const unpackNow = () =>
  unpackDate(new Date())

/**
 * Function to return an object containing the constituent timestamp parts for a date/time.
 * @param {Date} date - date object or string that can be parsed by `Date.parse()`
 * @return {Object} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const parseDate = (date) =>
  unpackDate(new Date(date))

/**
 * Function to return an object containing the constituent timestamp parts for a `Date` object
 * @param {Date} date - date object
 * @return {Object} - object containing `year`, `month`, `day`, `hours`, `minutes` and `seconds`.
 */
export const unpackDate = date => ({
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
 * @param {Date} duration - duration string
 * @return {Object} - object containing any of `year`, `month`, `day`, `hour`, `minute` and `second`.
 */
export const parseDuration = duration => {
  const match = duration.matchAll(/(-?\d+)\s*(\w+)/g)
  let result = { }

  for (let m of match) {
    const n = parseInt(m[1])           // convert quantity to integer
    const d = m[2].replace(/s$/, '')   // convert plural to singular
    result[d] = n
  }
  return weeksToDays(result)
}

/**
 * Function to convert an object containing any plural duration units (e.g. `hours`) to the singular counterpart (e.g. `hour`).
 * @param {Object} duration - object containing duration elements, either plural or singluar.
 * @return {Object} - object containing any of `year`, `month`, `day`, `hour`, `minute` and `second`.
 */
export const singularDurations = duration => {
  let result = { }
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
 * @param {Object} duration - object containing duration elements, including `week`
 * @return {Object} - object containing any of `year`, `month`, `day`, `hour`, `minute` and `second`.
 */
export const weeksToDays = duration => {
  if (duration.week) {
    duration.day = (duration.day || 0) + duration.week * 7
    delete duration.week
  }
  return duration
}

/**
 * Function to join the constituent parts of a time stamp into a string
 * @param {Object} ts - object containing `year`, `month`, `day`, and optionally, `hours`, `minutes` and `seconds`.
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
export const joinTimestamp = (ts, config={}) => {
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
 * @param {Object} ts - object containing `year`, `month`, `day`
 * @param {string} ts.year - the year as an integer
 * @param {string} ts.month - the month as an integer from 1 to 12
 * @param {string} ts.day - the month as an integer
 * @param {string} [joint='-'] - optional joining character for date segments
 * @return {string} - date string of the form `YYYY-MM-DD`
 */
export const joinDate = (ts, joint=defaults.dateJoint) =>
  [
    String(ts.year).padStart(4, '0'),
    String(ts.month).padStart(2, '0'),
    String(ts.day).padStart(2, '0'),
  ].join(joint)

/**
 * Function to join the constituent parts of a time into a string
 * @param {Object} ts - object containing `hours`, `minutes` and `seconds`.
 * @param {string} ts.hours - the hours as an integer from 0 to 23
 * @param {string} ts.minutes - the minutes as an integer from 0 to 59
 * @param {string} ts.seconds - the seconds as an integer from 0 to 59
 * @param {string} [joint=':'] - optional joining character for time segments
 * @return {string} - time string of the form `HH:MM:SS`
 */
export const joinTime = (ts, joint=defaults.timeJoint) =>
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
export const daysInMonth = (month, year) => {
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
export const leapYear = year => {
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
 * @param {string|number|Date|Object} [ts] - timestamp
 * @param {Object} [options] - configuration options
 * @param {string} [options.joint=' '] - joining character between date and time parts
 * @param {string} [options.dateJoint='-'] - joining character for date segments
 * @param {string} [options.timeJoint=':'] - joining character for time segments
 * @return {Object} - a `Timestamp` object
 */
export const timestamp = (ts, options) => new Timestamp(ts, options)

/**
 * Function to create a new `Timestamp` object for the current date/time
 * @param {Object} [options] - configuration options
 * @param {string} [options.joint=' '] - joining character between date and time parts
 * @param {string} [options.dateJoint='-'] - joining character for date segments
 * @param {string} [options.timeJoint=':'] - joining character for time segments
 * @return {Object} - a `Timestamp` object
 */
export const now = (options) => new Timestamp(null, options)

export default Timestamp
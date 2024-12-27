import Timestamp from './Timestamp'

export type TimestampProps = {
  joint:      string,
  dateJoint:  string,
  timeJoint:  string,
  locale:     string,
}

export type TimestampOptions = {
  joint?:      string,
  dateJoint?:  string,
  timeJoint?:  string,
  locale?:     string,
  debug?:      boolean,
}

export type TimestampParts = {
  year:     number,
  month:    number,
  day:      number,
  hours?:   number,
  minutes?: number,
  seconds?: number,
}

export type DurationParts = {
  year?:    number,
  month?:   number,
  day?:     number,
  week?:    number,
  hour?:    number,
  minute?:  number,
  second?:  number,
}

export interface DurationPlurals extends DurationParts {
  years?:    number,
  months?:   number,
  days?:     number,
  weeks?:    number,
  hours?:    number,
  minutes?:  number,
  seconds?:  number,
}

export type TimestampUnix = {
  unix: number
}

export type TimestampMilliseconds = {
  ms: number
}

export type TimestampSource =
  undefined |
  string |
  number |
  Date |
  Timestamp |
  TimestampParts |
  TimestampUnix |
  TimestampMilliseconds

export type Comparison = -1 | 0 | 1
export type Logger = (...args: unknown[]) => void
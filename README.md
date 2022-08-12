# badger-timestamp

This is a simple module for parsing, manipulating and formatting
ISO8601 timestamps, e.g. `YYYY-MM-DD HH::MM::SS`.

It is a very simple implementation that is intended to be lightweight
alternative to more feature-rich packages like moment, luxon, dayjs,
etc.

The primary goal is to be able to convert between database timestamps
and human-readable strings, and to allow simple date adjustments,
e.g. + 1 year, + 3 months, etc.

It is implemented as a thin wrapper around the native JS Date object.

## Installation

Install `badger-timestamp` using your favourite package manager.

### npm

    npm install @abw/badger-timestamp

### pnpm

    pnpm add @abw/badger-timestamp

### yarn

    yarn add @abw/badger-timestamp

## Documentation

Read the [Manual](https://abw.github.io/badger-timestamp/docs/manual) for
examples of use and the [API documentation](https://abw.github.io/badger-timestamp/docs/identifiers.html) for
further details.

## Author

Andy Wardley <abw@wardley.org>
# Getting Started

## Installation

Use your favourite package manager to install the module
from `@abw/badger-timestamp`.

::: code-group
```shell [npm]
npm add @abw/badger-timestamp
```
```shell [pnpm]
pnpm add @abw/badger-timestamp
```
```shell [yarn]
yarn add @abw/badger-timestamp
```
:::

## Basic Use

Import the `timestamp()` function using ESM syntax.

```js
import { timestamp } from '@abw/badger-timestamp'
```

Or via `require()` if you're still using Common JS format.

```js
const { timestamp } = require('@abw/badger-timestamp')
```

Call the function with an ISO8601 timestamp to create a new object.

```js
const ts = timestamp('2022-08-12T08:16:24');
```

The `timestamp()` function is a simple utility wrapper which creates
a new `Timestamp` object.  If you prefer you can import the `Timestamp`
class, either by name or as the default export, and instantiate a new
object yourself.

```js
import Timestamp from '@abw/badger-timestamp'

const ts = new Timestamp('2022-08-12T08:16:24');
```

There's also the `now()` function which returns a `Timestamp` object for
the current date and time.

## Do the Happy Badger Dance

You are now all set to do the Happy Badger Dance

<img src="/images/happy_badger_dance.gif" width="100%"/>
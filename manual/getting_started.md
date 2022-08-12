# Getting Started

- [Installation](#installation)
- [Basic Use](#basic-use)

## Installation

Use your favourite package manager to install the module
from `@abw/badger-timestamp`.

### npm

    npm install @abw/badger-timestamp

### pnpm

    pnpm add @abw/badger-timestamp

### yarn

    yarn add @abw/badger-timestamp

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


# Comparing Timestamps

## compare(timestamp) {#compare}

The `compare()` method can be used to compare a timestamp to
another one.  It accepts any of the arguments that can be used
to construct a timestamp.

```js
const ts1  = timestamp('2022/08/12 08:16:24');

// compare against a timestamp string
const cmp1 = ts1.compare('2022/09/13 09:16:24');

// compare against another timestamp object
const ts2  = timestamp('2022/09/13 09:16:24');
const cmp2 = ts1.compare(ts2);

// compare against a Date object
const dt1  = new Date('2022/09/13 09:16:24');
const cmp2 = ts1.compare(dt1);

// etc...
```

The value returned is `-1` if the timestamp object is less than
(i.e. chronologically before) the timestamp argument passed, `+1`
if it's greater that it (i.e. chronologically after) or `0` if it's
the same.

## equal(timestamp) {#equal}

The `equal()` method is a shortcut implemented as a wrapper around
[`compare()`](#compare) that can be used to determine if a timestamp is
equal to another one.

```js
const ts1 = timestamp('2022-08-12 08:16:24');
ts1.equal('2022-08-12 08:16:24'); // true
ts1.equal('2023-09-13 09:17:25'); // false
```

## before(timestamp) {#before}

The `before()` method is a another shortcut for determining if a timestamp
is before another one.

```js
const ts1 = timestamp('2022-08-12 08:16:24');
ts1.before('2022-08-12 08:16:25'); // true
ts1.before('2022-08-12 08:16:23'); // false
```

## after(timestamp) {#after}

The `after()` method is a another shortcut for determining if a timestamp
is after another one.

```js
const ts1 = timestamp('2022-08-12 08:16:24');
ts1.after('2022-08-12 08:16:25'); // false
ts1.after('2022-08-12 08:16:23'); // true
```

## notBefore(timestamp) {#notBefore}

The `notBefore()` method is yet another shortcut that can be used to test
if a timestamp is after or equal to another one

```js
const ts1 = timestamp('2022-08-12 08:16:24');
ts1.notBefore('2022-08-12 08:16:23'); // false
ts1.notBefore('2022-08-12 08:16:24'); // true
ts1.notBefore('2022-08-12 08:16:25'); // true
```

## notAfter(timestamp) {#notAfter}

The `notAfter()` method is the final shortcut that can be used to test
if a timestamp is before or equal to another one

```js
const ts1 = timestamp('2022-08-12 08:16:24');
ts1.notBefore('2022-08-12 08:16:23'); // true
ts1.notBefore('2022-08-12 08:16:24'); // true
ts1.notBefore('2022-08-12 08:16:25'); // false
```

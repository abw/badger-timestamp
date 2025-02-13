import test from './library/ava-vitest.js'
import { now, timestamp } from '../src/Timestamp'

test(
  'compare years',
  t => {
    const stamp1 = timestamp('2022-01-02 03:04:05')
    t.is( stamp1.compare('2023-01-02 03:04:05'), -1 )
    t.is( stamp1.compare('2022-01-02 03:04:05'), 0 )
    t.is( stamp1.compare('2021-01-02 03:04:05'), 1 )
  }
)
test(
  'compare months',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.is( stamp1.compare('2022-03-03 03:04:05'), -1 )
    t.is( stamp1.compare('2022-02-03 03:04:05'), 0 )
    t.is( stamp1.compare('2022-01-03 03:04:05'), 1 )
  }
)
test(
  'compare days',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.is( stamp1.compare('2022-02-04 03:04:05'), -1 )
    t.is( stamp1.compare('2022-02-03 03:04:05'), 0 )
    t.is( stamp1.compare('2022-02-02 03:04:05'), 1 )
  }
)
test(
  'compare hours',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.is( stamp1.compare('2022-02-03 04:04:05'), -1 )
    t.is( stamp1.compare('2022-02-03 03:04:05'), 0 )
    t.is( stamp1.compare('2022-02-03 02:04:05'), 1 )
  }
)
test(
  'compare minutes',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.is( stamp1.compare('2022-02-03 03:05:05'), -1 )
    t.is( stamp1.compare('2022-02-03 03:04:05'), 0 )
    t.is( stamp1.compare('2022-02-03 03:03:05'), 1 )
  }
)
test(
  'compare seconds',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.is( stamp1.compare('2022-02-03 03:04:06'), -1 )
    t.is( stamp1.compare('2022-02-03 03:04:05'), 0 )
    t.is( stamp1.compare('2022-02-03 03:04:04'), 1 )
  }
)
test(
  'compare before',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.true( stamp1.before('2022-02-04 03:04:05') )
  }
)
test(
  'compare equal',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.true( stamp1.equal('2022-02-03 03:04:05') )
  }
)
test(
  'compare after',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.true( stamp1.after('2022-02-01 03:04:05') )
  }
)
test(
  'compare notBefore',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.true( stamp1.notBefore('2022-02-01 03:04:05') )
    t.true( stamp1.notBefore('2022-02-03 03:04:05') )
  }
)
test(
  'compare notAfter',
  t => {
    const stamp1 = timestamp('2022-02-03 03:04:05')
    t.true( stamp1.notAfter('2022-02-05 03:04:05') )
    t.true( stamp1.notAfter('2022-02-03 03:04:05') )
  }
)
test(
  'inThePast',
  t => {
    const stamp1 = now().adjust('-2 seconds')
    t.true( stamp1.inThePast() )
    t.false( stamp1.inTheFuture() )
  }
)
test(
  'inTheFuture',
  t => {
    const stamp1 = now().adjust('2 seconds')
    t.true( stamp1.inTheFuture() )
    t.false( stamp1.inThePast() )
  }
)

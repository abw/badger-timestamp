import test from 'ava';
import { now } from '../src/Timestamp.js'

test(
  'now()',
  t => {
    const cmp = new Date();
    // let's hope the time doesn't roll over a second/minute/hour...
    const stamp = now();
    t.is( stamp.parts.year, cmp.getFullYear() );
    t.is( stamp.parts.month, cmp.getMonth() + 1 );
    t.is( stamp.parts.day, cmp.getDate() );
    t.is( stamp.parts.hours, cmp.getHours() );
    t.is( stamp.parts.minutes, cmp.getMinutes() );
    t.is( stamp.parts.seconds, cmp.getSeconds() );
  }
);

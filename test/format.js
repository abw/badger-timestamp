import test from 'ava';
import { timestamp } from '../src/Timestamp.js'

test(
  'kebab formats',
  t => {
    const stamp = timestamp('2023-03-02 07:45:46');
    t.is( stamp.kebab(), '2023-03-02-07-45-46');
    t.is( stamp.kebabDate(), '2023-03-02');
    t.is( stamp.kebabTime(), '07-45-46');
    t.is( stamp.kebabDateTime(), '20230302-074546');
  }
);

test(
  'snake formats',
  t => {
    const stamp = timestamp('2023-03-02 07:45:46');
    t.is( stamp.snake(), '2023_03_02_07_45_46');
    t.is( stamp.snakeDate(), '2023_03_02');
    t.is( stamp.snakeTime(), '07_45_46');
    t.is( stamp.snakeDateTime(), '20230302_074546');
  }
);

test(
  'squish formats',
  t => {
    const stamp = timestamp('2023-03-02 07:45:46');
    t.is( stamp.squish(), '20230302074546');
    t.is( stamp.squishDate(), '20230302');
    t.is( stamp.squishTime(), '074546');
  }
);

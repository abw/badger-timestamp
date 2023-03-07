import { timestamp } from '../src/Timestamp.js'

const ts = timestamp('2023-03-07', { locale: 'fr-FR' })
// const ts = timestamp('2023-03-07')
console.log(ts.weekdayName());         // lundi
console.log(ts.weekdayName('short'));  // lun.

console.log(ts.weekdayName());           // Tuesday
console.log(ts.weekdayName('short'));    // Tue
console.log(ts.monthName());             // March
console.log(ts.monthName('short'));      // Mar

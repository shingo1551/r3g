// ex3.ts
const log = console.log;

//
const i = 999;
log(typeof '' + i);
log(typeof i.toString());

//
const s = '12345.67';
log(typeof +s);
log(typeof Number.parseFloat(s));
log(typeof Number.parseInt(s));

//
const b1 = Boolean(i);
log(typeof b1, b1, !!i);

const b2 = Boolean(s);
log(typeof b2, b2, !!s);

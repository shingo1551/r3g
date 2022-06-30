// ex2.ts
const log = console.log;

//
const list = [1, 2, 3];
let [a, b, c, d] = list;
log(a, b, c, d);

[a, b] = [4, 5, 6, 7];
log(a, b);

//
const o = { x: 1, y: 2, z: 3 };
let { x, z } = o;
log(x, z);

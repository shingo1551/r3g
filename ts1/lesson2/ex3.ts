// ex3.ts
const log = console.log;

//
const m = [1, 2];
const n = [7, 8, 9];
const l = [...m, ...n];
log(l);

//
const o = { a: 1, b: 2 };
const p = { x: 1, y: 2, z: 3 };
const q = { ...o, ...p };
log(q);

//
const a = [...'abcxyz'];
log(a);

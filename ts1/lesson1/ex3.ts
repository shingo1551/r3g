// ex3.ts
const log = console.log;

// function
log(typeof log);

// string
log(typeof 'string', 'string');
log(typeof "string", "string");

// boolean
log(typeof false, false);
log(typeof true, true);

// object
const o = { x: 1.1, y: 3, z: 4.4 };
log(typeof o, o);

const a = [1.1, 3, 4.4];
log(typeof a, a);

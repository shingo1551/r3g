// ex4.ts
const log = console.log;

//
log(true, !!true);
log(10, !!10);
log(-2, !!-2);
log(1n, !!1n);
log('a', !!'a');
log({}, !!{});
log([], !![]);
log(Infinity, !!Infinity);

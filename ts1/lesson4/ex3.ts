// ex3.ts
const log = console.log;

//
log(false, !!false);
log(0, !!0);
log(-0, !!-0);
log(0n, !!0n);
log('', !!'');
log(null, !!null);
log(undefined, !!undefined);
log(NaN, !!NaN);

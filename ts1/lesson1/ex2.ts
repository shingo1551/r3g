// ex2.ts
const log = console.log;

// number
log(typeof 1, 1);
log(typeof 10.1, 10.1);
log(typeof 1.23e-4, 1.23e-4);

log(typeof 0b1111, 0b1111);
log(typeof 0o10, 0o10);
log(typeof 0x12, 0x12);

log(typeof 12345678901234567890, 12345678901234567890);

// big int
log(typeof 12345678901234567890n, 12345678901234567890n);
log(
  typeof 12345678901234567890123456789012345678901234567890123456789001234567890n,
  12345678901234567890123456789012345678901234567890123456789001234567890n
);

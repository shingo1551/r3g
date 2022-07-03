// ex1.ts
import { printf, sprintf } from 'https://deno.land/std/fmt/printf.ts';

const b = true;
printf('%T %t\n', b, b);

const n = 42;
printf('%T: %d\n', n, n);
printf('%d (%6d) (%-6d) (%06d)\n', n, n, n, n);
printf('%x %o %b\n', n, n, n);

const s = 'abc';
printf('%s (%10s) (%-10s)\n', s, s, s);

const p = { name: 'Tanaka', age: 42 };
printf('%j\n', p);

printf('\\%%\n');

const pi = Math.PI;
const s2 = sprintf('%e %f %g %v (%6.2f) (%-6.2f)', pi, pi, pi, pi, pi, pi);
console.log(s2);

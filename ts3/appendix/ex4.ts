// ex4.ts
import { asyncCall } from './ex2.ts';

await asyncCall(2, true);
console.log('pass 2');

await asyncCall(2, false);
console.log('pass 3');

// ex3.ts
import { asyncCall } from './ex2.ts';

asyncCall(2, true);
console.log('pass 2');

asyncCall(2, false);
console.log('pass 3');

// ex2.ts
import { resolveAfter } from './ex1.ts';

export async function asyncCall(sec: number, b: boolean) {
    try {
        console.log('pass 1');
        console.log(await resolveAfter(sec, b));
    } catch (e) {
        console.log('catch:', e);
    }
}

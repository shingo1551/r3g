// ex5.ts
import { resolveAfter } from './ex1.ts';

export function asyncCall(sec: number, b: boolean) {
    console.log('pass 1');

    return resolveAfter(sec, b).then(
        (ok) => {
            console.log('OK:', ok);
        },
        (ng) => {
            console.log('NG:', ng);
        }
    )
}

// ex6.ts
import { asyncCall } from './ex5.ts';

asyncCall(2, true).then(() => {
    console.log('pass 2');

    asyncCall(2, false).then(() => {
        console.log('pass 3');
    });
});

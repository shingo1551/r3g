// ex1.ts
const log = (re: RegExp, s: string) => console.log(re.test(s), re, s);

//
let re1 = /do+g/;
log(re1, 'hounddog');
log(re1, 'badge');
log(re1, 'hotdog');
log(re1, 'doofus');
log(re1, 'doogie');
log(re1, 'Doogie');

let re2 = /car*t/;
log(re2, 'carted');
log(re2, 'carrot');
log(re2, 'cat');
log(re2, 'carl');

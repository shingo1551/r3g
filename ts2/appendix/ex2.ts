// ex2.ts
const log = (re: RegExp, s: string) => console.log(re.test(s), re, s);

//
const re1 = /ba+/;
log(re1, 'ba');
log(re1, 'baaa');
log(re1, 'rhumba');
log(re1, 'babar');

const re2 = /ba(na){2}/;
log(re2, 'banana');
log(re2, 'semi-banana');
log(re2, 'bananarama');

const re3 = /dogs? and cats?( and chikens?)?/;
log(re3, 'dogs and cats and chikens');
log(re3, 'dog and cat');

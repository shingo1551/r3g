// ex2.ts
let s: any;

try {
    console.log('pass 1');
    console.log(s.length)
    console.log('pass 2');
} catch (e) {
    console.log('pass catch');
} finally {
    console.log('pass finally');
}

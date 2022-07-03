// ex10.ts
const array = [1, 2, 3, 4];
let sum = array.reduce((acc, val) => acc + val);
console.log(sum);

sum = array.reduce((acc, val, i) => {
    console.log(i, ':', acc, val);
    return acc + val;
});
console.log(sum);

sum = array.reduce((acc, val, i) => {
    console.log(i, ':', acc, val);
    return acc + val;
}, 0);
console.log(sum);

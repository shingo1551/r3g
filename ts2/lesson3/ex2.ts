// ex2.ts
const fruits = ['Apple', 'Banana', 'Mango'];
const first = fruits.shift();
console.log(first, fruits);

const newLength = fruits.unshift('Strawberry');
console.log(newLength, fruits);

fruits[9] = 'Kiwi';
console.log(fruits.length, fruits);
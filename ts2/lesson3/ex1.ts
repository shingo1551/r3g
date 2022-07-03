// ex1.ts
const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits.length);
console.log(fruits[0], fruits[fruits.length - 1]);

const length = fruits.push('Orange');
console.log(length, fruits);

const last = fruits.pop();
console.log(last, fruits);

fruits.reverse();
console.log(fruits);

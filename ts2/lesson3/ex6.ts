// ex6.ts
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals);

const removedItem = animals.splice(1, 2);
console.log(removedItem);
console.log(animals);

const months = ['Jan', 'March', 'April', 'May'];
months.splice(1, 0, 'Feb');
console.log(months);

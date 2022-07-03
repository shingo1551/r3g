// ans1.ts
const persons = [
    { name: 'Yamada', age: 30 },
    { name: 'Suzuki', age: 20 },
    { name: 'Nakamura', age: 35 },
    { name: 'Tanaka', age: 40 },
];

persons.sort((p1, p2) => p1.name < p2.name ? -1 : 1);
console.log(persons);

persons.sort((p1, p2) => p1.age - p2.age);
console.log(persons);

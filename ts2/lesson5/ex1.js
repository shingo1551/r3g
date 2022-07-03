// ex1.js
class Person {
  print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

const p = new Person();
p.name = 'tanaka';
p.age = 35;
p.print();

p.name = 45;
p.age = 'suzuki';
p.print();

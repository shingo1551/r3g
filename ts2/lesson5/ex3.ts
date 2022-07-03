// ex3.ts
class Person {
  constructor(public name = 'tanaka', public age = 20) { }

  print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

const p1 = new Person();
p1.print();

const p2 = new Person('suzuki', 35);
p2.print();

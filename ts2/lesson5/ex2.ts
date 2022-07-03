// ex2.ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

const p = new Person('tanaka', 35);
p.print();

// ex5.ts
class Person {
  constructor(public name: string, public age: number) { }

  print() {
    console.log(`name: ${this.name}, age: ${this.age}`);
  }
}

class Employee extends Person {
  constructor(name: string, age: number, public salary: number) {
    super(name, age);
  }

  print() {
    super.print();
    console.log(`salary: ${this.salary}`);
  }
}

function print(p: Person) {
  p.print();
}

const p1 = new Person('tanaka', 30);
print(p1);

const p2 = new Employee('yamada', 25, 300000);
print(p2);

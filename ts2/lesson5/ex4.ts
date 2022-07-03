// ex4.ts
class Person {
  constructor(private _name = 'tanaka', private age = 20) { }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  print() {
    console.log(`name: ${this._name}, age: ${this.age}`);
  }
}

const p = new Person();
p.print();

p.name = 'suzuki';
console.log(p.name);

p.age = 45;

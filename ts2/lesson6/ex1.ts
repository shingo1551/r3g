// ex1.ts
export const PI = 3.14;

export const square = (n: number) => n * n;

export class Person {
  constructor(public name: string, public age: number) { }

  print() {
    console.log(this.name, this.age);
  }
}

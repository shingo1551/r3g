// ex4.ts
function foo(bar: number, bas?: string) {
  console.log(bar, bas);
}

foo(123);
foo(123, 'world');

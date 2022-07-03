// ex5.ts
function foo(bar: number, bas = 'hello') {
  console.log(bar, bas);
}

foo(123);
foo(123, 'world');

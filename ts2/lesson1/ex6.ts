// ex6.ts
function sum(name: string, ...v: number[]) {
  let sum = 0;
  for (const x of v)
    sum += x;

  console.log(name, sum);
}

sum('sum:', 2, 4, 6, 8);

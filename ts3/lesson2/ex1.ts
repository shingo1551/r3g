// ex1.ts
function f(x: number | string) {
    console.log(x.slice(1));

    if (typeof x === 'string')
        console.log(x.slice(2));
}

f('123');
f(123);

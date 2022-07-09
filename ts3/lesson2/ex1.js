// ex1.js
function f(x) {
    console.log(x.slice(1));

    if (typeof x === 'string')
        console.log(x.slice(2));
}

f('123');
f(123);

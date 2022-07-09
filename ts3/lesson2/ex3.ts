// ex3.ts
interface Foo {
    foo: number;
}

interface Bar {
    bar: string;
}

function f(arg: Foo | Bar) {
    console.log(arg.foo);

    if ('foo' in arg)
        console.log(arg.foo);
}

f({ foo: 123 });
f({ bar: 'abc' });

// ex4.ts
interface Foo {
    t: 'foo';
    foo: number;
}

interface Bar {
    t: 'bar';
    bar: string;
}

function f(arg: Foo | Bar) {
    console.log(arg.foo);

    if (arg.t === 'foo')
        console.log(arg.foo);
}

f({ t: 'foo', foo: 123 });
f({ t: 'bar', bar: 'abc' });
f({ t: 'boo', bar: 'abc' });

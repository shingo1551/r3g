// ex5.ts
interface Foo {
    t: 'foo';
    foo: number;
}

interface Bar {
    t: 'bar';
    bar: string;
}

function f(arg: Foo | Bar) {
    switch (arg.t) {
        case 'foo':
            console.log(arg.foo);
            break;

        case 'bar':
            console.log(arg.bar);
            break;
    }
}

f({ t: 'foo', foo: 123 });
f({ t: 'bar', bar: 'abc' });

// ex2.ts
class Foo {
    foo = 123;
}

class Bar {
    bar = 'abc';
}

function f(arg: Foo | Bar) {
    console.log(arg.foo);

    if (arg instanceof Foo)
        console.log(arg.foo);
}

f(new Foo());
f(new Bar());

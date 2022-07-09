// ex3.ts
function f1() {
    try {
        throw 'Exception';
    } catch (e) {
        console.log(e);
    }
}
f1();

function f2() {
    try {
        throw Error('Exception!!!')
    } catch (e) {
        console.log(e);
    }
}
f2();

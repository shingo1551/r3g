// ans1.ts
const colors = ['red', 'green', 'blue'];

let s = '';
for (let i = 0; i < colors.length; i++) {
    s += colors[i];
    if (i !== 2)
        s += ':';
}
console.log(s);

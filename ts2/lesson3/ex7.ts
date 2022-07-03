// ex7.ts
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
months.sort();
console.log(months);

const array = [1, 30, 4, 21, 100000];
array.sort();
console.log(array);

function cmp(i: number, j: number) {
    return i - j;
}
array.sort(cmp);
console.log(array);

array.sort((i, j) => j - i);
console.log(array);

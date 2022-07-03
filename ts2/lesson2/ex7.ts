// ex7.ts
const obj = {
  name: 'TARO YAMADA',
  _credit: '36666666666660',
  expire: '01/25',
  _security: 1234,
};

console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj, null, '  '));

console.log(JSON.stringify(obj, ['name', 'expire']));
console.log(JSON.stringify(obj, (k, v) => (k.startsWith('_') ? undefined : v)));

// ex8.ts
const s = `
{
  "name": "TARO YAMADA",
  "_credit": "36666666666660",
  "expire": "01/25",
  "_security": 1234
}`;

console.log(JSON.parse(s));

console.log(JSON.parse(s, (k, v) => (k.startsWith('_') ? undefined : v)));

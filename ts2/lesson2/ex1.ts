// ex1.ts
const a = 'Hello';
const b = 'World!';

const s = `
<html>
  <body>
    <h1>${a}, <span>${b}</span></h1>
    <h1>${a.toUpperCase()}, ${b.toUpperCase()}</h1>
  </body>
</html>
`;

console.log(s);

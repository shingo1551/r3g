// ex5.ts
const expr = 'Papayas' as string;

switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;

  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    break;

  default:
    console.log('Sorry, we are out of' + expr + '.');
}

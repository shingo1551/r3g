// ex9.ts
const sentence = 'A ticket to 大阪 costs ¥2000 👌.';

const reg = /\p{Emoji_Presentation}/gu;
console.log(sentence.match(reg));

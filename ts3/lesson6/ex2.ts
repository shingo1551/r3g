// ex2.ts
import { Member } from './ex5.ts';

const member: Member = {
    name: 'yamada',
    age: 45
}

const headers = new Headers([['content-type', 'application/json']]);

const opt = {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(member)
};

fetch('http://localhost:8080/member/id-003', opt)
    .then((res) => {
        return res.json();
    }).then((obj) => {
        console.log(obj);
    });

// ans2.ts
const opt = {
    method: 'DEL'
};

fetch('http://localhost:8080/member/id-001', opt)
    .then((res) => {
        return res.json();
    }).then((obj) => {
        console.log(obj);
    });

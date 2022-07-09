// ex1.ts
fetch('http://localhost:8080/member/id-001')
    .then((res) => {
        return res.json();
    }).then((obj) => {
        console.log(obj);
    });

fetch('http://localhost:8080/member/id-002')
    .then(res => res.json()).then(obj => console.log(obj));

try {
    const res = await fetch('http://localhost:8080/member/id-002');
    console.log(await res.json());
} catch (e) {
    console.log(e);
}

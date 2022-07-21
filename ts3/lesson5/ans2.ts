// ans2.ts
const opt = {
    method: 'DEL'
};

try {
    const res = await fetch('http://localhost:8080/member/id-001', opt);
    console.log(await res.json());
} catch (e) {
    console.log(e);
}

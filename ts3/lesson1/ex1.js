// ex1.js
function print(p) {
    console.log(p);
}

let p2 = { x: 10, y: 20 };
let p3 = { x: 1, y: 2, z: 3 };

print(p2);
print(p3);

p2 = p3;
print(p2);

p2.z = 0;

// ex4.ts
interface Point2 {
    x: number;
    y: number;
}

interface Point3 {
    x: number;
    y: number;
    z: number;
}

function print(p: Point2) {
    console.log(p);
}

let p2: Point2 = { x: 10, y: 20 };
let p3 = { x: 1, y: 2, z: 3 } as Point3;

print(p2);
print(p3);

p2 = p3;
print(p2);

p2.z = 0;

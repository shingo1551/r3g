// ex2.ts
class Point2 {
    constructor(public x: number, public y: number) { }
}

class Point3 extends Point2 {
    constructor(x: number, y: number, public z: number) {
        super(x, y);
    }
}

function print(p: Point2) {
    console.log(p);
}

let p2 = new Point2(10, 20);
let p3 = new Point3(1, 2, 3);

print(p2);
print(p3);

p2 = p3;
print(p2);

p2.z = 0;

// ex9.ts
loop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1)
            break loop;
        console.log('i = ' + i + ', j = ' + j);
    }
}

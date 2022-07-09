// ex1.ts
export function resolveAfter(sec: number, b: boolean) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b)
                resolve('resolved');
            else
                reject('rejected');
        }, sec * 1000);
    });
}

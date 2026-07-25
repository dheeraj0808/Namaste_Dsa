function countEven(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        if (i % 2 === 0) {
            result += 1;
        }
    }
    return result;
}

console.log(countEven(6));
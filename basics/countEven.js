function countEven(n) {
    let count = 0;
    //counting its some also 
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            count += 1;
            sum += i;
        }
    }
    return [count, sum];
}

console.log(countEven(16));
function factorial(n) {
    // Start from 1 because multiplying by 0 would make the entire factorial 0.
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
let results = factorial(5);
console.log(results);
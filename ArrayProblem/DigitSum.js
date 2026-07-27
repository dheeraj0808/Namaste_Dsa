// write a function that will count the digit sum and return the total sum 

function CountSum(n) {
    let sum = 0;
    while (n > 0) {
        let digit = n % 10;
        sum += digit;
        n = Math.floor(n / 10);
    }
    return sum;

}

console.log(CountSum(12091));
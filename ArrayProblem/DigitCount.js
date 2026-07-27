// write a function that will count total digit in the number
function CountSum(n) {
    let total = 0;
    if (n === 0) {
        return 1;
    }


    while (n > 0) {
        n = Math.floor(n / 10);
        total++;
    }
    return total;

}

console.log(CountSum(12091));
console.log(CountSum(0));
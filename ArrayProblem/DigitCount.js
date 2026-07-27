// write a function that will count total digit in the number
function Count(n) {
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

console.log(Count(12091));
console.log(Count(0));
console.log(Count(-123));//invalid inputs
console.log(Count()); //invalid inputs
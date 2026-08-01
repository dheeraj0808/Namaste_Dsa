//write a funtion to find the missing number in a given number 
// range in between [0,n]

function missingNumber(arr) {
    let n = arr.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {

        actualSum += arr[i];

    }

    return expectedSum - actualSum;

}
console.log(missingNumber([3, 0, 1]));                 // 2

console.log(missingNumber([0, 1]));                    // 2

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));       // 8

console.log(missingNumber([0]));                       // 1

console.log(missingNumber([1]));                       // 0


// lets understand this problem with another gype like xor aproach 

function xor(arr) {
    let xor = 0;
    let n = arr.length;
    for (let i = 0; i <= n; i++) {
        xor ^= i;
    }


    for (let i = 0; i < arr.length; i++) {
        xor ^= arr[i];
    }

    return xor;
}

console.log(xor([3, 0, 1]));
console.log(xor([3, 0, 1, 2]));
console.log(xor([])); 

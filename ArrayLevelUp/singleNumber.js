// find the number which comes only once , remaing all the number are present twice


function singleNumber(arr) {
    let xor = 0;
    for (let i = 0; i < arr.length; i++) {
        xor ^= arr[i];
    }

    return xor;
}

console.log(singleNumber([2, 3, 4, 5, 2, 3, 5]));


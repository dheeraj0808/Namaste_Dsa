// you have given an array and then have to print the reverse array

function reveseArr(arr) {
    let left = 0;
    let right = arr.length - 1;

    if (arr.length <= 1) {
        return arr;

    }

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
console.log(reveseArr([10, 20, 30, 40, 50]));
console.log(reveseArr([10]));
console.log(reveseArr([10, 20]));
console.log(reveseArr([10, -20, 30, 40, 150, 0, 0]));


// if we have to attempt the same question in for loop then we will simple
function reve(arr) {
    for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
        //swap condition 
    }
}
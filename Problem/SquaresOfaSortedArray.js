//You are given a sorted array.

//Return another array where every number is squared, and the result should also be sorted.

function SquareSorted(arr){
    let left = 0;
let right = arr.length - 1;
let pos = arr.length - 1;
// we will start the position from the right side where the array end 2
let result = new Array(arr.length);
// this is for create a new array as much of length of the old array was 

// now the main part is coming which is condition we wil check until our left and right pointer would be the same
while (left <= right) {
    if (arr[left] * arr[left] < arr[right] * arr[right]) {
        result[pos] = arr[right] * arr[right];
        right--;
    } else {
        result[pos] = arr[left] * arr[left];
        left++;
    }

    pos--;
}

return result;
}
//find the last negative number position
function flnn(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return arr[i];
        }

    }
    return -1;
}
console.log("last negative number " + flnn([2, -3, 4, 5, 6, -15, 5]));
//find the last negative number
function flnn2(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return i;
        }

    }
    return -1;
}
console.log("last negative number index " + flnn2([-2, 3, 4, 5, 6, -15, 5]));

///<<---alternative aproach-->>
//
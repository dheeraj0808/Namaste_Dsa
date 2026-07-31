// check weather array is sorted or not 
// return true if the array is sorted and return false if array is not sorted

function checkSorted(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i + 1]) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(checkSorted(2, 3, 4, 5, 6));
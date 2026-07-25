//finding smallest number in the array
function smallest(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}
console.log("smallest number : " + smallest([9, -2, -4, -6, -8, 19]));
// We initialize smallest with arr[0], so the first element has already been considered as the current smallest. 
// Therefore, we start the loop from index 1 to avoid comparing the first element with itself
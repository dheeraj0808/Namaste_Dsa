// write a function to search for an element in an array
//this is is just for finding the target element is present or not 
function searchElement(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return 1;
        }
    }
    return -1;

}

console.log(searchElement([2, 3, 4, 5, 6], 5));
//this is is just for finding the target element is present at which place
function searchElement2(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;

}
console.log(searchElement2([2, 3, 4, 5, 6], 5));

// counting how many times the target number are present in the array
//this is is just for finding the target element is present at which place
function searchElement3(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {

            count++;
        }

    }
    return count

}
console.log(searchElement3([2, 3, 4, 5, 6, 5, 5], 5));

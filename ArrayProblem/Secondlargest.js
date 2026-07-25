// finding 2nd largest number in a given array
function findSecondLargest(arr) {
    //in case of empty array or 1 element in that case it will show infinity
    // so to solve infity issue we will add a case
    if (arr.length < 2) {
        return null;
    }
    let firstlargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstlargest) {
            secondLargest = firstlargest;
            firstlargest = arr[i];
        }
        //in case of largest is duplicate ie doubly presented then we have to add condtion 
        //if the most largest is double presented then that case it will not enter this loop
        else if (arr[i] > secondLargest && arr[i] !== firstlargest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest === -Infinity ? null : secondLargest;

}
//let arr5=[];
// when array length is less than 2 then the 2nd largest will be null
let arr5 = [21, 3, 34, 56, 167, 167, 78, 98];
let result5 = findSecondLargest(arr5);
console.log("2nd largest number is " + result5);


//alternative way to find the 2nd largest number in the array

function sl(arr) {
    let largest = -Infinity;
    let SecondLargest = -Infinity;
    if (arr.length < 2) {
        return null;
    }
    //this fails when first 2 element of the array are same 
    // if (arr[0] > arr[1]) {
    //     largest = arr[0];
    //     SecondLargest = arr[1];
    // } else {
    //     largest = arr[1];
    //     SecondLargest = arr[0];
    // }
    //this fails in case of [4,4] ie if the starting 2 element are same - 
    // so in this case we have to start with index 0

    // here we are starting from 2nd index because 1st and 2nd one we have already discussed 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            SecondLargest = largest;
            largest = arr[i];

        }
        else if (arr[i] > SecondLargest && arr[i] !== largest) {
            SecondLargest = arr[i];
        }

    }
    if (SecondLargest === -Infinity) {
        return null;
    } else {
        return SecondLargest;
    }

}
console.log(sl([2, 4, 6, 1, 3]));
console.log(sl([0, 0]));
console.log(sl([0, 0, 1]));
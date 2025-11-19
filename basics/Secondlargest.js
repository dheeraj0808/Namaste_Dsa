// finding 2nd largest number in a given array
function findSecondLargest(arr5) {
    //in case of empty array or 1 element in that case it will show infinity
    // so to solve infity issue we will add a case
    if (arr5.length < 2) {
        return null;
    }
    let firstlargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr5.length; i++) {
        if (arr5[i] > firstlargest) {
            secondLargest = firstlargest;
            firstlargest = arr5[i];
        }
        //in case of largest is duplicate ie doubly presented then we have to add condtion 
        //if the most largest is double presented then that case it will not enter this loop
        else if (arr5[i] > secondLargest && arr5[i] != firstlargest) {
            secondLargest = arr5[i];
        }
    }
    return secondLargest;

}
//let arr5=[];
// when array length is less than 2 then the 2nd largest will be null
let arr5 = [21, 3, 34, 56, 167, 167, 78, 98];
let result5 = findSecondLargest(arr5);
console.log("2nd largest number is " + result5);

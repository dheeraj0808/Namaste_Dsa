/*
Merge Sort

Merge Sort is a divide and conquer sorting algorithm.
It works by dividing the array into two halves, sorting each half,
and then merging the two sorted halves into one sorted array.

Steps:
1. Divide the array into two equal parts.
2. Keep dividing until each part has only one element.
3. Merge the small sorted parts back together in sorted order.

Time Complexity:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n log n)

Space Complexity:
- O(n)

Merge Sort is stable and is useful for large datasets.
*/

function mergeSort(arr){
    if(arr.length<=1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    // is we will enter the right value in the arr.slice 
    // then it will go till the array end 
    return merge(left,right);
    // here merge is fuction will merge two sorted array

}
function merge(left, right) {
    let result = [];

    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // remaining elements of left
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // remaining elements of right
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}
let arr = [2,4,1,6,9];
console.log(mergeSort(arr));
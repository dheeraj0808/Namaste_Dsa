/*
Quick Sort

Quick Sort is a divide and conquer sorting algorithm.
It works by choosing a pivot element and placing it in its correct position.
Then it sorts the elements smaller than the pivot on the left side
and the elements greater than the pivot on the right side.

Steps:
1. Choose a pivot element.
2. Partition the array around the pivot.
3. Recursively apply the same process to the left and right parts.

Time Complexity:
- Best Case: O(n log n)
- Average Case: O(n log n)
- Worst Case: O(n^2)

Space Complexity:
- O(log n) for recursive call stack

Quick Sort is fast in practice and is commonly used.
*/
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example
const array = [8, 3, 1, 7, 0, 10, 2];
const sortedArray = quickSort(array);

console.log("Original Array:", array);
console.log("Sorted Array:", sortedArray);
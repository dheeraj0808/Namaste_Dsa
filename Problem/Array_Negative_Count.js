function countNegatives(arr) {
  let count = 0;
  for (let i = 0, n = arr.length; i < n; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}

// Example 
const nums = [3, -1, 0, -7, 8, -2, -5];
console.log(countNegatives(nums));
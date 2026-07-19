// Function to count the number of negative numbers in an array
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

//2. Function to get the indexes of negative numbers in an array    
function negativeIndexes(arr) {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      indexes.push(i);
    }
  }
  return indexes;
}

// Example
const nums = [4, -1, 7, -2, 0, -5];
console.log(negativeIndexes(nums)); // [1, 3, 5]

//3. Function to get the negative numbers from an array

function negativePositionsWithValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push({ index: i, value: arr[i] });
    }
  }
  return result;
}

console.log(negativePositionsWithValues([4, -1, 7, -2, 0, -5]));
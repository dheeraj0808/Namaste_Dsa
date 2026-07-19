// 1) Count the number of negative values in an array.
function countNegatives(arr) {
  let count = 0;
  for (let i = 0, n = arr.length; i < n; i++) {
    if (arr[i] < 0) count++;
  }
  return count;
}

// 2) Get indexes where values are negative.
function negativeIndexes(arr) {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) indexes.push(i);
  }
  return indexes;
}

// 3) Get index + value pairs for negative values.
function negativePositionsWithValues(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      result.push({ index: i, value: arr[i] });
    }
  }
  return result;
}

// Example input
const nums = [3, -1, 0, -7, 8, -2, -5];

console.log("Negative count:", countNegatives(nums));
console.log("Negative indexes:", negativeIndexes(nums));
console.log("Negative index-value pairs:", negativePositionsWithValues(nums));
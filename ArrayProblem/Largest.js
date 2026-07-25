//finding largest number in the array
function largest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("largest number : " + largest([9, -2, -4, -6, -8, 19]));
// in this problem we are starting the arr looping condition form 1 because pehla to hamne hi maan liya hai ki wo sabse bada hai 
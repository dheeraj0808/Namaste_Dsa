//now here we are going to find the second smallest in the array
// please solve 2nd largest then this it may be easier for you 
function ss(arr) {
    let smallest = Infinity;
    let SecondSmallest = Infinity;
    if (arr.length < 2) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            SecondSmallest = smallest;
            smallest = arr[i];

        }
        else if (arr[i] < SecondSmallest && arr[i] !== smallest) {
            SecondSmallest = arr[i];
        }

    }
    if (SecondSmallest === Infinity) {
        return null;
    } else {
        return SecondSmallest;
    }

}
console.log(ss([2, 4, 6, 1, 3]));
console.log(ss([0, 0]));
console.log(ss([0, 0, 1]));
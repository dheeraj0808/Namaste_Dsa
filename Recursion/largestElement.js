//Find the maximum element in an array using recursion

let arr = [5, 2, 9, 1, 17];

function findMax(n){

    if(n===0){
        return arr[0];
    }

   let smallerMax = findMax(n - 1);

    return Math.max(arr[n], smallerMax);

}

console.log(findMax(arr.length - 1));
// write a program to find the sum of all number in the array
let arr = [2,4,5,1,11,10,3];
function sum(n){
    if(n===0){return arr[n]};
    return arr[n]+sum(n-1);

}
console.log(sum(arr.length-1));
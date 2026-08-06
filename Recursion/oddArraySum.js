// write a program that will print the sum of all the odd number in the array
let arr = [2,4,5,1,11,10,3];
function sumOdd(n){
    if(n<0){return 0};

    if(arr[n]%2 !==0){
       return arr[n] + sumOdd (n-1);
    }
    return sumOdd(n-1);
}
console.log(sumOdd(arr.length-1));
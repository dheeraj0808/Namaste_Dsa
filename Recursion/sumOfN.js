// write a program to find the sum of n 

function sum (n){
    // base case
    if(n===0)return 0;
    return n + sum (n-1);
}

console.log(sum(5));
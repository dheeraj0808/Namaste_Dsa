// write a program to print the sum of all the odd number from 1 to n using recursion 

function oddSum (n){
    // base condition 
    if(n===0){
        return 0;
    }
  
    if (n % 2 !== 0) {
     return n + oddSum (n-1);
    }

      return oddSum(n-1);
    
}

console.log(oddSum(5));
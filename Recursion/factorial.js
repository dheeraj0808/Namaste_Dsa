// write a function that will return the factorial of n

function fact(n){
    //base case
    if(n===0){
        return 1;
    }

    return n*fact(n-1);
}

console.log(fact(5));
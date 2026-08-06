// write a function to print the odd number form 1 to n (n is given number)

function Odd(n){
    // stopping conditon
    if(n===0)return ;
    Odd(n-1);
    if (n % 2 !== 0) {
        console.log(n);
    }
}

Odd(5)

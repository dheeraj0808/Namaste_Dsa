// write a program to print number n to 1
// this is a classic example of recursion 
function print(n){
    //stopping condtion 
    if(n<1){
        return;
    }
    console.log(n);
    print(--n);
    // n=n-1;
    // print(n) :- these two lines are equivalent to the above one line

}
print(5);

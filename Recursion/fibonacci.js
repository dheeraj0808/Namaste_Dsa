//f(0)=0, f(1)=1
// f(2)= f(1)+ f(0)=1
// f(3)= f(2)+f(1)=2
// f(4)= f(3)+f(2)=3
// f(5)= f(4)+f(3)=5
// f(6)= f(5)+f(4)=8

// basically fibonacci number is the sum of the previous two number 

/* crack down the algorithm process 
fibonacci (n) ---> fabonacci (n-1)+ fabonacci (n-2) ----> fabonacci (n-1)= fabonacci (n-2)+fabonacci(n-3)
....... we we go till  base case f(2)= f(0)+f(1);


*/

function fabonacci (n){
    // base case 
   if (n === 0) return 0;
if (n === 1) return 1;

    // recursive call

    return fabonacci(n-1)+fabonacci(n-2);
}
console.log(fabonacci(17));


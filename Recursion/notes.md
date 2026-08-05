 function call itself to solve the smaller version of the problem is called recursion 
There are two parts of the recursion 
1. Base Case:- Stop condtion ie where to stop (when to stop calling itself)
2. Recursive Case:- part where function call itself

for example 
function fun (){
    console.log("Hello Dheeraj");
    fun();
}

fun();

--> here the function calling itself this is called recursion 

ex:- function fun(){
    if(num===0){
        return ;
    }
    -> above is called stopping condition ;
    console.log(num);
    num=num-1;
    fun(num);
}
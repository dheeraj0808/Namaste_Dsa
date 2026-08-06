// write a funtion to print 1 to n 
function print(n){
if(n<1){
    return;
}
print(n-1);
console.log(n);
}
print(5);
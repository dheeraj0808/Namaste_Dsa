// given an integer return true if the integer is power of 2 
// return false if the integer is not the power of 2
function powerOfTwo(n){
    if(n==1){
        return true;
    }
    else if(n%2 !==0 || n<1){
        return false;
    }

return powerOfTwo(n/2)
}

console.log(powerOfTwo(32));
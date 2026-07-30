// here we are checking the array is sorted or not 
// we will check the array is in ascending order , if it so then we will return true and if the array is not sorted then we will return false

function checkSorted(arr){
    for(let i = 0;i<arr.length-1;i++){
       if( arr[i]>arr[i+1]){
return false;
       }

    }
     return true;
   
}

console.log(checkSorted([1,4,4,9]));
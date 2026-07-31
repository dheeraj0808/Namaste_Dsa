//write a function in which we will not have to create a new array we will modify in the same array and remove the zero from the array by two pointer problem
//return the count of 
function removeZero(arr){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !==0){
           
            arr[x]=arr[i];
             x++;
        }

    }
    for(i=x;i<arr.length;i++){
        arr[i]=0;
    }
    return arr;
}

console.log(removeZero([2,3,4,0,9]));

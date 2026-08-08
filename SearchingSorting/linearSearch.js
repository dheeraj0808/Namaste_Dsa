// write a program to return the target element , retun -1 if the target element is not present

function search(arr , target){
    for(let i=0;i<arr.length; i++){
        if(arr[i]===target){
        return i;
        
    }
   
}
 return -1;
   
}

let arr = [2,4,6,7,3,1];

console.log(search(arr,3));
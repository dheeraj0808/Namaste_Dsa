// write a fuction that will return how much distict element are present in in the array


function distictElementCount(arr){

    if(arr.length===0){
        return 0;
    }
    let count = 1;
    for(let i =0;i<arr.length-1;i++){
        if(arr[i] !== arr[i+1]){
            count++;
        }
    }
    return count;
}

console.log("total count"+distictElementCount([2,2,3]));

// now we are thinking that how could we print all that distict element 


function distictElement(arr){
let result=[];
    for(let i =0;i<arr.length-1;i++){
        if(arr[i] !== arr[i+1]){
           result.push(arr[i]);
           // this is used to add the element in the existing array 
        }
    }
   if (arr.length > 0) {
    result.push(arr[arr.length - 1]);
   }
   return result;
}

console.log(distictElement([2,2,3,4]));
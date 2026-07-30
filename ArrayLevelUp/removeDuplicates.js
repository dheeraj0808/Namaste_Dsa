//here basically we are tring to solve the array leetcode problem no 26 
// in this problem we are going to solve and find the distict k element of the array 
// we will keep all the k distict element of the array at the starting later on we will simply keep all the remaining element of the array

function removeDuplicate(arr){
    let x =0;
    // this is for the pointer that where is our distict element index is currently 
    for(let i =1;i<arr.length;i++){
        if(arr[i]>arr[x]){
            x=x+1;
            arr[x]=arr[i];
        }
    }
    return x+1;
}
console.log(removeDuplicate([2,4,4,6,7,8,9,77]));
// and also we are assuming that this is an non decreasing array
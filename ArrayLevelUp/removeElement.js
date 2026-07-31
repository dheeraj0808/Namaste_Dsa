// here we are writing a funtion to remove the element the specific element and its duplicates from the array 
// solve remove duplicates problem first that will help in this problem also 

function removeElement(arr, k){
    let x=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !==k){
            arr[x]=arr[i];
            x++;
        }
    }
    return x;
}
// basically here we are return the number of element that are not equal to k
console.log(removeElement([2,3,5,6,7,7,9],7))
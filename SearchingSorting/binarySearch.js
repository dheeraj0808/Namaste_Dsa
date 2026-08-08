// find the array element through the binary search
// array are already sorted and we have to just find the target element 
/* BInary search 
so as we know array is already sorted so in place of searching element by element we will simply 
go and devide the array n/2 and we compare from the n/2th element if our target element is greater 
then we find next in the right array and if target element is smaller than the middle one then 
we move to left portion of the element so this snario keeps on and we will do until the we found
or reached at right pointer is greater than left pointer (r>l) -> then we stopped
-> and if still element is not found that means array is not present so return -1

 */
function search(arr , target){

let left =0;
let right = arr.length-1;
while(left<=right){
let mid = Math.floor((left+right)/2);

if(arr[mid]===target){
    return mid;

}
else if(target > arr[mid]){
    left = mid +1;
}
else{
    right = mid - 1;
}
}
return -1;
}

console.log(search([2,3,4,6,7],6));
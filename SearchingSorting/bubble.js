// write a program to sort the number through bubble sort
//-> after the first iteration the biggest element is go at there place 
// -> this is same happening and keeps going and after each iteration one iteration will decreasing
// because as of at each step iteration will decreasing due to highest element will go at that place
let arr= [2,14,6,18,9,11,3]
function bubble(arr){
    let n = arr.length;

    let isSwapped = false;
for (let i=0;i<arr.length-1;i++) {
    for (let j=0;j<n-1-i;j++) {
        if (arr[j]>arr[j+1]) {
            let temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
            isSwapped=true;
        }
    }
    if(!isSwapped)break;
}
return arr;
}
let result = bubble(arr);
console.log(result);

/*
if in any iteration no sorting happend ie no swapping then we need to stop bubble sort
because array is already sort
ex [1,2,3,4,5,7,]
ex [12,3,5,6,7,8,]-> stop after 1st iteration 
*/
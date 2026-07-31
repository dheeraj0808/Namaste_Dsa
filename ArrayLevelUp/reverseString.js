// write a program to reverse the array of character 
// but we have to do it by modifying the input array by in-place no need to change the orignal array
//-> modify this array means we have to re-arrange this array , we donot have to use the extra space 

function reverseString(arr){
    let n= arr.length;
    let halfLen= Math.floor(n/2);

    for(let i=0;i<halfLen;i++){
       let temp = arr[i];
        arr[i]=arr[n-i-1];
        arr[n-i-1]=temp;
    }
    return arr;
}
console.log(reverseString(['h','e','l','l','o']));
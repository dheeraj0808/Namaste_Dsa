//in selection sort we will find the smallest element and keep to put that places 
// so it will take n-1 because at the end the last element we need not to search because that are 
// already sorted

for(let i=0;i<n-1;i++){
   let min =i;

   for(let j=i+1;j<n;j++){
    if(arr[j]<arr[min]){
        min=j;
    }
   }
   if(min !=i){
   let temp = arr[i];
   arr[i]=arr[min];
   arr[min]=temp;

   }
}
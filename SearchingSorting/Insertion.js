let arr = [2,12,13,34,5,3,9,8];

function insertionSort(arr){
    let n= arr.length;
    for(let i=0;i<n ; i++){
        let curr = arr[i];
       let prev = i-1;
       while(prev >= 0 && arr[prev] > curr){
            arr[prev +1] = arr[prev];
            prev--;
        }

        arr[prev +1]= curr;
    }
    return arr;

    }

    let result = insertionSort(arr)
console.log(result);
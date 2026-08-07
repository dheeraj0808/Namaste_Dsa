// write a function that will count the number of 1's and return the max counted 1's

    function consecutiveOne(arr){
        let current_sum =0;
        let maxCount=0;

        for(let i=0;i<arr.length;i++){
            if(arr[i]==1){
                current_sum++;
            }
            else {
                maxCount=Math.max(current_sum,maxCount);
                current_sum=0;
            }
        }
        return Math.max(current_sum,maxCount);
    }
    console.log(consecutiveOne([1,1,3,3,4,5,2,1,1,1,1,5,0,0,7,5,2,1,1,1,1,1]));
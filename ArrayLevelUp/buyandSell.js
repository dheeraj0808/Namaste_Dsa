// you can no buy and sell on the same date 
// write a function to gain the maximum profit from buy and sell stock assuming array item items are the price of the day of the stock
function maxProfit(arr){
    let min=arr[0];
    let maxProf=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]-min >maxProf){
            maxProf=arr[i]-min;
        }
        if(arr[i]<min){
            min=arr[i];
        }
        

    }
    return maxProf;
}

console.log(maxProfit([2,4,1,5,7,3,2,2,16]));
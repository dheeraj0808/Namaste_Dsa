// reverse array is total different 
// we are here writing a function that will return revese of given number
// we are assuming n is positive integer and then we are finding its reverse

function reverseNumber(n) {
    let reverse = 0;

    if (n === 0) {
        return 0;
    }
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;

        n = Math.floor(n / 10);

    }
    return reverse;

}
//2nd function to handle for the negative and positive both the number
function reverseNum(n){
    let reverse = 0;
    let orignal = n;
    // normalizing the number through this function and making it to positive
    n= Math.abs(n);

    if (n === 0) {
        return 0;
    }
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;

        n = Math.floor(n / 10);

    }
  if(orignal<0){
    return -reverse;
  }
  else{
    return reverse;
}

}

console.log(reverseNumber(124));
console.log(reverseNumber(1));
console.log(reverseNumber(0));
console.log(reverseNumber(10));
console.log(reverseNum(-120));
console.log(reverseNum(-902000));


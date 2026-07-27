//finding that number is palindrome or not and assuming positive integer greater than zero
function palindromNum(n) {
    let reverse = 0;
    let orignal = n;

    if (n === 0) {
        return true;
    }
    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;

        n = Math.floor(n / 10);

    }
    if (orignal === reverse) {
        return true
    } else {
        return false;
    }


}

console.log(palindromNum(124));
console.log(palindromNum(121));
console.log(palindromNum(122));

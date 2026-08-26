// write a program that will detect the palindrome in the string

function isPalindrome(str) {

    let left =0;
    let right = str.length-1;

    while(left<right){
        if(str[left]===str[right]){
            left++;
            right--;

        }
        else{
            return false;
        }

    }
    return true;

}

let str = "acar";
console.log(isPalindrome(str));

// aproach 2 with the more edge cases

var isPalindrome = function(s) {
    s = s.toLowerCase();

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // skip non-alphanumeric from left
        if (!/[a-z0-9]/.test(s[left])) {
            left++;
        }

        // skip non-alphanumeric from right
        else if (!/[a-z0-9]/.test(s[right])) {
            right--;
        }

        // both are valid characters
        else {
            if (s[left] !== s[right]) {
                return false;
            }

            left++;
            right--;
        }
    }

    return true;
};

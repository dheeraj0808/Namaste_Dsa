// write a program that will return reverse of the string

function reverse(str){
let result = "";
    for(let i = str.length-1;i>=0;i--){
        result=result+str[i];
    }
    return result;

}

var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let temp = s[left];

        s[left] = s[right];
        s[right] = temp;

        left++;
        right--;
    }
};

let str="Dheeraj";
console.log(reverse(str));
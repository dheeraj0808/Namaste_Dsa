// write a program that will return reverse of the string

function reverse(str){
let result = "";
    for(let i = str.length-1;i>=0;i--){
        result=result+str[i];
    }
    return result;

}

let str="Dheeraj";
console.log(reverse(str));
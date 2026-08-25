//write a program that will return the occurence of the character 

/*
Problem — Count Occurrences of a Character

Write a function that takes:

a string
a target character

and returns how many times that character occurs.

Example:

let str = "programming";
let target = "m";

Expected output:

2 */

function occurence(str , target){
    let count = 0;
    for(let i =0; i<str.length;i++){
        if(str[i]===target){
            count++;
        }

    }
    return count;
}

let str = "Dheeraj";
console.log(occurence(str , "m"));
console.log(occurence(str , "e"));
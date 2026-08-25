/*
Given a string and a target character, return the index of its first occurrence.

Example:

str = "Dheeraj"
target = "e"

Output:

2

If the character doesn't exist, return:

-1

Don't use indexOf(). Solve it with a loop.
*/

function firstOccurence(str , target){
    for(let i=0;i<str.length;i++){
        if(str[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(firstOccurence("Dheeraj", "r"));
console.log(firstOccurence("Dheeraj", "e"));
console.log(firstOccurence("Dheeraj", "o"));
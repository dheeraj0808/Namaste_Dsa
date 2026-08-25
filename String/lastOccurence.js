/* return last occurence of the string 
Given:

str = "banana"
target = "a"

Return:

5

If target doesn't exist → -1.

Constraint: Don't use lastIndexOf().
*/

function lastOccurence(str , target){
 for(let i=str.length-1;i>=0;i--){
        if(str[i]===target){
            return i;
        }
    }
    return -1;
}

console.log(lastOccurence("Dheeraj", "r"));
console.log(lastOccurence("Dheeraj", "e"));
console.log(lastOccurence("aDheeraja", "a"));
console.log(lastOccurence("aDheeraj", "a"));
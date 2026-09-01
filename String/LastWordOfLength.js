/*
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:

Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:

Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
*/

// first methode

function lastwordLength(str){
    str = str.trim();
    str = str.split(" ");
    return str[str.length-1].length;
}

// 2nd methode 

function lastWordlength2(str){
    //first we have to trim 
    let n = str.length-1; // to find the length of the string 
    // without finding length we can't go to the last length 
    while(n>=0){
       /*
        if(str[n]===" "){
            --n;
        }
        else{
            break;
        }
         */

        if(str[n] != " "){
            break;
        }
        --n;
        // this is the alternative way of writing the same logic
    }
     // n is a point where my last word starts
        let count =0;
        while(n>=0){
            /*
            if(str[n] !==" "){
                --n;
                ++count;
            }
            else{
                break;
            }
            */
           if(str[n]===" "){
            break;
           }
           --n;
           ++count;
           // another way of writing the same logic
        }
        return count;
}


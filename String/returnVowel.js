//write a program that will return the vowel in the string
// count of the vowel

function countVowel(str){
    let count =0;
    for(let i=0;i<str.length;i++){
        if ("aeiou".includes(str[i])) {
            /*
            if (
    str[i] === 'a' ||
    str[i] === 'e' ||
    str[i] === 'i' ||
    str[i] === 'o' ||
    str[i] === 'u'
)

we can also do this condition in place of the above include methode
            */
            count++;
        }

    }
    return count;
}

let str = "Dheeraj";

console.log(countVowel(str));
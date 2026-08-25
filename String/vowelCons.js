// write a program that will return the count of the vowel and consonant of the string

function vowelConsonant(str){
    let vowel =0;
    let consonant=0;
    for(let i=0;i<str.length;i++){
       if (
    str[i] === 'a' ||
    str[i] === 'e' ||
    str[i] === 'i' ||
    str[i] === 'o' ||
    str[i] === 'u')
    { vowel++;}
    else{
        consonant++;
    }


    }
    return [vowel,consonant];
}

let str = "Dheeraj";

console.log(vowelConsonant(str));
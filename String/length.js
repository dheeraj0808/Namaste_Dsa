// write a program that will return the length of the string without str.length


function length(str){
    let count =0;
    for(let i=0; str[i] !== undefined;i++){
count++;
    }
    return count;

}

let str = "Dheeraj Singh";
length(str);
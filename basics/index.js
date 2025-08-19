//function 1
function calculator(a, b) {
    let add = a + b;
    let sub = a - b;
    let multi = a * b;
    let div = a / b;
    console.log("addition is " + add);
    console.log("substraction is " + sub);
    console.log("multiplication is " + multi);
    console.log("division is " + div);
}
calculator(4, 5);

//creating a finction in which it will tells us when someone can vote 
function eligiblecheck(age) {
    if (age < 1) {
        console.log("age is not valid !");
    }
    else if (age >= 18) {
        console.log("you are eligible to vote");

    }
    else {
        console.log("Sorry ! you are not elible to vote");
    }
}
eligiblecheck(-5);
eligiblecheck(10);
eligiblecheck(17);
eligiblecheck(18);
eligiblecheck(19);
eligiblecheck(65);

//function 3 - square of a number - when we will return inside the fuction then we have recieve that value in a variable 
function square(x) {
    let result = x * x;
    return result;
}
let value = square(4);
console.log("square of the number is " + value);



import chalk from "chalk";
console.log(chalk.blue("Hello Dheeraj!"));
console.log(chalk.red("Error Message!"));
console.log(chalk.green("Success!"));

// creating a function for check even or odd
function EvenOdd(number) {
    let rem = number % 2;
    if (rem == 0) {
        console.log("Given number is even");
    }
    else {
        console.log("number is Odd");
    }
}
EvenOdd(5);
EvenOdd(8);

// looks is what when you have to do some repeatedly again and again then we will use loops
function Hello(i) {
    console.log("welcome to the city" + i);
}
for (let i = 0; i < 10; i++) {
    Hello(i)
}

//length calculate of arr and impliment into loops
let arr = [23, 45, 67, 98, 123, 2, 3, 4, 6];
let length = arr.length;
console.log("Total length of the array is " + length);

// access array element to via loop
for (let i = 0; i < arr.length; i++) {
    console.log("array element at " + i + " position is " + arr[i]);
}

//printing only even number from the array
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i]);
    }
}

// printing only odd number from the array
for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 != 0) {
        console.log(arr[i]);
    }
}

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

// write a function that searches for an element in an array and return the index, and if the element is not present then return -1
function searchElement(arra, x) {
    for (let i = 0; i < arra.length; i++) {
        if (arra[i] == x) {
            return i;
        }
    }
    return -1;
}
console.log("seach element index result");
let arra = [1, 2, 3, 4, 5, 6, 6, 78];
let result = searchElement(arra, 5);
console.log(result);

// write a function that returns the number of negative number in the array
function countNegative(array2) {
    let count = 0;
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] < 0) {
            count++;
        }
    }
    return count;
}
let array2 = [1, 2, -3, -4, -65, -7, -8];
let result2 = countNegative(array2);
console.log("total negative number in array");
console.log(result2);

//find largest number in the array3

function findLargest(array3) {
    let largest = -Infinity;
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] > largest) {
            largest = array3[i];
        }
    }
    return largest;
}
let array3 = [12, 3, 34, 45, 345, -6, 76, 78, 90, 32];
let result3 = findLargest(array3);
console.log("largest number in the array3");
console.log(result3);

//finding smallest number in the array 3
function findSmallest(array3) {
    let smallest = +Infinity;
    for (let i = 0; i < array3.length; i++) {
        if (array3[i] < smallest) {
            smallest = array3[i];
        }
    }
    return smallest;
}
let result4 = findSmallest(array3);
console.log("smallest number in the array 3");
console.log(result4);


//let arr5=[];
// when array length is less than 2 then the 2nd largest will be null
let arr5 = [21, 3, 34, 56, 167, 167, 78, 98];
let result5 = findSecondLargest(arr5);
console.log("2nd largest number is " + result5);

//loops in loop
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log("i =" + i + "j=" + j);
    }
}
// 
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < i; j++) {
        console.log("i=" + i + "j=" + j);
    }
}
//
console.log("j<=i testing");
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        console.log("i=" + i + "j=" + j);
    }
}
//
console.log("j>0 testing");
for (let i = 0; i < 5; i++) {
    for (let j = i; j < 0; j++) {
        //j<0 condition will never brak so it will go into infinite loop
        console.log(j);
    }
}
for (let i = 0; i < 5; i++) {
    for (let j = i; j > 0; j--) {
        console.log(i, j);
    }
}
//
for (let i = 5; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        console.log(i, j);
    }
}
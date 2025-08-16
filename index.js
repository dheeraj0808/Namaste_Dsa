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
    if (age < 18) {
        console.log("you are eligible to vote");

    }
    else {
        console.log("Sorry ! you are not elible to vote");
    }

}eligiblecheck(18);

import chalk from "chalk";

console.log(chalk.blue("Hello Dheeraj!"));
console.log(chalk.red("Error Message!"));
console.log(chalk.green("Success!"));
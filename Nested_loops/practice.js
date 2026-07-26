// practicing basic nested loops in javascript

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}
// in the above code, we have two nested loops. The outer loop runs from 1 to 5, 
// and for each iteration of the outer loop, the inner loop also runs from 1 to 5. 
// This results in a total of 25 iterations (5 outer * 5 inner), 
// and for each combination of i and j, it logs their values to the console.

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`Outer loop iteration: ${i}, Inner loop iteration: ${j}`);
    }
}

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(`Outer loop: ${i}, Inner loop: ${j}`);
    }
}
// In this code, the outer loop runs from 1 to 4, and the inner loop runs from 1 to the current value of i. 
// This creates a triangular pattern of iterations, where the number of inner loop iterations increases with each iteration of the outer loop.
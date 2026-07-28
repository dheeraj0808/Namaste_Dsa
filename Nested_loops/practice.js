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
        console.log(`2. Outer loop iteration: ${i}, Inner loop iteration: ${j}`);
    }
}

for (let i = 1; i <= 4; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(`3. Outer loop: ${i}, Inner loop: ${j}`);
    }
}
// In this code, the outer loop runs from 1 to 4, and the inner loop runs from 1 to the current value of i. 
// This creates a triangular pattern of iterations, where the number of inner loop iterations increases with each iteration of the outer loop.

for(let i =0 ; i<3;i++){
    for(let j=i;j>0;j--){
        console.log(`4. Outer loop: ${i}, Inner loop: ${j}`);
    }
}

for(let i=0;i<3;i++){
    for(let j=i;j>0;j--){
        console.log(`5. Outer loop: ${i}, Inner loop: ${j}`);
    }
}

// loops 6 reverse order 
for(let i=5;i>0;i--){
    for(let j=0;j<i;j++){
       console.log(`6. Outer loop: ${i}, Inner loop: ${j}`); 
    }
}


// square star pattern

for(i=0;i<5;i++){
    let row = ' ';
    for(j=0;j<5;j++){
        row +="*"
        
    }
     console.log(row);
   
}

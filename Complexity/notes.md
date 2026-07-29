 Time Complexity
 ->Time Complexity is used to measure the efficiency of an algorithm in terms of how the number of operations grows as the input size (n) increases.
 ->This is used to measure efficiency of algorithm in terms of speed ,
  as the input size increase

-> if the time complexity decreases that means the speed of the program is increases 
so we have to alwayse focus on how to decrease the time complexity
as low as the time complexity the program perform as better and take less time

-> Time complexity does not means total time taken by the algorithm 
if some piece of code or any algorithm i will run on xyz laptop and use same program 
on other laptop to run then it takes different time to complete the program 

-> Time taken is depend on machine configuration and system and language of the program and several things 
so Time taken =/= time complexity

-> let us understand the time complexity with an example

 **Linear Search**                                               | **Binary Search**                                                        |
 --------------------------------------------------------------- | ------------------------------------------------------------------------ |
 🔹 Checks **one element at a time** from left to right.         | 🔹 Checks the **middle element** first.                                  |
 🔹 If the element is at the beginning, it finds it immediately. | 🔹 If the middle is not the target, it **eliminates half** of the array. |
 🔹 In the worst case, it may have to check **every element**.   | 🔹 In each step, the search space becomes **half** of the previous size. |
 🔹 Time increases **linearly** as the array size grows.         | 🔹 Time increases **logarithmically**, much slower than linear growth.   |
 **Best Case:** `O(1)` (first element)                           | **Best Case:** `O(1)` (middle element is the target)                     |
 **Average Case:** `O(n)`                                        | **Average Case:** `O(log n)`                                             |
 **Worst Case:** `O(n)` (last element or not found)              | **Worst Case:** `O(log n)`                                               |
 Works on **sorted and unsorted** arrays.                        | **Requires a sorted array.**                                             |
 
 Number of Elements | Maximum Comparisons |
 -----------------: | ------------------: |
                  8 |                   3 |
                 16 |                   4 |
                 32 |                   5 |
                 64 |                   6 |
                128 |                   7 |
               1024 |                  10 |
          1,000,000 |                 ~20 |

-> Binary Search  >>>> Linear Search 
-> We will always take the worst case
-> Big O Notation :- It measures the worst time complexity 
linear search O(n) , Binary Search O(log n )

-> another type of complexity (O(n^2))
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
    }}
    -> here n times run the outer loop and n times run the inner loop so n*n is the time complexity 

-> another type of complexity (O(n log n))--> Merge sort
for (let i = 1; i <= 5; i++) {
    // here log n similar to binary 
}
--> so it total becon n* log n

5. O(n^3)
6. O(2^n)
7. O(n!)

-> Constant time complexity means O(1)

The order of time complexity 
O(1) > O(log n) > O(n) > O(n log n) > O(n^2) > O(n^3) > O(2^n) > O(n!)



<-------------Space Complexity----------->

Basically space complexity means how much extra space we are using
-> we have already space given (like any arr or integer so rather than this how much space we are using that is calculated and called space complexity)

-->Space Complexity is the amount of extra memory an algorithm requires to solve a problem.
Important: We count extra memory, not the memory already used by the input.
let arr = [10, 20, 30, 40, 50];

The array already exists. We do not count its memory.


│
├── O(1)   → Constant Space
├── O(log n) → Logarithmic Space
├── O(n)   → Linear Space
├── O(n log n) → Linearithmic Space
└── O(n²)  → Quadratic Space

1.
Input Size        Extra Memory

10                3 variables

100               3 variables

1000              3 variables

1000000           3 variables

O(1)-> no extra memory needed

function sum(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

2.
O(log n) — Logarithmic Space
Input          Extra Memory

8              3

16             4

32             5

64             6

128            7

1024           10

Example 3: O(n) Space

function copyArray(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }

    return newArr;
}
Input          Extra Memory

8              3

16             4

32             5

64             6

128            7

1024           10

4. O(n log n)

Less common for beginners.

Memory grows faster than O(n) but much slower than O(n²).

Example:

n = 8

Memory ≈ 24
n = 16

Memory ≈ 64
n = 32

Memory ≈ 160

5. O(n²) — Quadratic Space

Memory grows like a square.

Input      Extra Memory

2           4

3           9

4           16

10          100

100         10000

Usually happens when we create a matrix.

Example:

0 0 0

0 0 0

0 0 0

A 3×3 matrix stores 9 values.

Comparison
Space Complexity	Growth	Example
O(1)	Fixed	A few variables
O(log n)	Very slow	Recursion depth in Binary Search
O(n)	Same as input	New array, string, object
O(n log n)	Between n and n²	Some divide-and-conquer algorithms
O(n²)	Square of input	Matrix (2D array)
Order
Best → O(1) > O(log n) > O(n) > O(n log n) > O(n²) > O(n³) > O(2ⁿ) > O(n!) → Worst
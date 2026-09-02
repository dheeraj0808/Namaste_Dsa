// Why use a Stack?
// - We need LIFO order (Last In, First Out) — the most recently added item must be handled first.
// - Real uses: undo/redo, browser back button, function call stack (recursion), bracket/parentheses matching,
//   expression evaluation, backtracking (DFS, maze solving).
// - Basically, anytime you need to "reverse" the order of processing or track "what came last", use a stack.

let stack = [];

stack.push(10);
stack.push(20);
stack.push(30);
stack.push();

stack.pop();

//stack.pop(10); // ❌ this is does not work because we can not pass any value inside the pop fuction 
// when we call the pop function then it will remove the top most element

console.log(stack);


// stack.peek(); --> ie looking at the top of the stack
/*
push() → stack.push()
pop()  → stack.pop()
peek() → stack[stack.length - 1]
*/

//Stack — Step 4: isEmpty()

let stack2 = [];

console.log(stack2.length === 0);

// this is for the checking that either the stack is empty or not 
// it returns as true and false acording to stack is empty or not 

/*
Stack                  Check

[]                     length === 0 → true

[10]                   length === 0 → false

[10, 20]               length === 0 → false
*/



//          STACK
//            │
//    ┌───────┴────────┐
//    ↓                ↓
// push()            pop()
//   ADD             REMOVE
//    │                │
//    └──── TOP ───────┘
//             │
//           peek()
//          LOOK TOP
//          isEmpty()
//          CHECK EMPTY
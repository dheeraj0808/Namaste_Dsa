// Why use a Queue?
// - We need FIFO order (First In, First Out) — the item that arrived first must be handled first.
// - Real uses: task/CPU scheduling, BFS in graphs and trees, request handling (rate limiting, buffering),
//   print/job queues, order processing (first come, first served).
// - Basically, anytime tasks must be processed in the same order they arrived, use a queue.

let queue = [];

queue.push(10); // enqueue → add to the rear
queue.push(20);
queue.push(30);

queue.shift(); // dequeue → remove from the front

//queue.shift(10); // ❌ this does not work because we can not pass any value inside the shift function
// when we call the shift function then it will remove the front most element

console.log(queue);


// queue.peek(); --> ie looking at the front of the queue
/*
enqueue() → queue.push()
dequeue() → queue.shift()
peek()    → queue[0]
*/

//Queue — Step 4: isEmpty()

let queue2 = [];

console.log(queue2.length === 0);

// this is for checking whether the queue is empty or not
// it returns true or false according to whether the queue is empty or not

/*
Queue                  Check

[]                     length === 0 → true

[10]                   length === 0 → false

[10, 20]               length === 0 → false
*/



//              QUEUE
//                │
//    ┌───────────┴────────────┐
//    ↓                        ↓
// push()                   shift()
//  ADD (rear)             REMOVE (front)
//    │                        │
//  FRONT ───────────────────  REAR
//             │
//         queue[0]
//         LOOK FRONT
//         isEmpty()
//         CHECK EMPTY

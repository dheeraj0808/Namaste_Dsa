# Queue

## What is a Queue?
A **Queue** is a linear data structure that follows **FIFO** (First In, First Out) order.
The element inserted first is the first one to be removed — like a queue of people waiting in line.

## Core Operations
| Operation | Description | Time Complexity |
|-----------|-------------|------------------|
| `enqueue(x)` | Insert element `x` at the rear of the queue | O(1) |
| `dequeue()`  | Remove and return the front element | O(1) |
| `front() / peek()` | Return the front element without removing it | O(1) |
| `isEmpty()` | Check if the queue has no elements | O(1) |
| `size()` | Return the number of elements | O(1) |

## Properties
- Insertion happens at one end, called the **rear** (back).
- Deletion happens at the other end, called the **front**.
- No random access — you can only access the front element directly.
- Can be implemented using an **array**, a **linked list**, or two stacks.

## Array vs Linked List Implementation
- **Array-based**: fast, cache-friendly, but `dequeue()` from the front is O(n) unless a circular buffer (front/rear pointers) is used.
- **Linked List-based**: dynamic size, O(1) enqueue and dequeue with head/tail pointers, but extra memory for pointers.

## Common Use Cases
- CPU/task scheduling
- Breadth-First Search (BFS) in graphs and trees
- Print/job queues, request handling (rate limiting, buffering)
- Order processing in real-world systems (first come, first served)
- Cache implementations (e.g. LRU with deque)

## Important Patterns
- **Circular Queue**: reuses freed array slots via modulo arithmetic to avoid O(n) shifting.
- **Deque (Double-Ended Queue)**: insertion/removal allowed from both front and rear — used in sliding window problems.
- **Monotonic Queue**: maintains elements in increasing/decreasing order — used for "sliding window maximum/minimum" type problems.
- **Two Stacks**: two stacks can be used to implement a Queue (and vice versa).
- **Queue + BFS**: any level-order/shortest-path traversal problem relies on a queue.

## Edge Cases to Remember
- Dequeuing/peeking from an empty queue → handle underflow.
- Enqueuing to a fixed-size array queue → handle overflow.
- Using a plain array with `shift()` for dequeue is O(n) — prefer a circular buffer or linked list for large-scale use.

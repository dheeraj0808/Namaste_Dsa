# Stack

## What is a Stack?
A **Stack** is a linear data structure that follows **LIFO** (Last In, First Out) order.
The element inserted last is the first one to be removed — like a stack of plates.

## Core Operations
| Operation | Description | Time Complexity |
|-----------|-------------|------------------|
| `push(x)` | Insert element `x` on top of the stack | O(1) |
| `pop()`   | Remove and return the top element | O(1) |
| `top() / peek()` | Return the top element without removing it | O(1) |
| `isEmpty()` | Check if the stack has no elements | O(1) |
| `size()` | Return the number of elements | O(1) |

## Properties
- Insertion and deletion happen only from one end, called the **top**.
- No random access — you can only access the top element directly.
- Can be implemented using an **array** or a **linked list**.

## Array vs Linked List Implementation
- **Array-based**: fast, cache-friendly, but has a fixed capacity (unless dynamically resized).
- **Linked List-based**: dynamic size, no capacity limit, but extra memory for pointers.

## Common Use Cases
- Function call stack / recursion
- Undo-redo functionality in editors
- Balanced parentheses / bracket matching
- Expression evaluation (infix, postfix, prefix conversion)
- Backtracking algorithms (maze solving, DFS)
- Browser history (back button)

## Important Patterns
- **Monotonic Stack**: maintains elements in increasing/decreasing order — used for "next greater element", "next smaller element" type problems.
- **Two Stacks**: used to implement a Queue, or to solve problems like min-stack (tracking minimum in O(1)).
- **Stack + Recursion**: any recursive solution can be converted to an iterative one using an explicit stack.

## Edge Cases to Remember
- Popping/peeking from an empty stack → handle underflow.
- Pushing to a fixed-size array stack → handle overflow.

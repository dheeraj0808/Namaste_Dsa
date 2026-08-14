# Linked List Theory

A linked list is a linear data structure made of nodes. Each node contains:
- data
- a pointer to the next node

The first node is called the head, and the last node points to `null`.

Example:

`10 -> 20 -> 30 -> null`

## Why Linked List?
Linked lists are useful when data changes often because inserting and deleting nodes is easier than in arrays.

## Types of Linked List
- Singly Linked List: each node points to the next node
- Doubly Linked List: each node points to both next and previous nodes
- Circular Linked List: the last node points back to the first node

## Basic Operations
- Traversal: visit every node
- Insertion: add a node
- Deletion: remove a node
- Searching: find a value

## Time Complexity
- Insert at beginning: `O(1)`
- Delete at beginning: `O(1)`
- Search: `O(n)`
- Access by index: `O(n)`

## Advantages
- Dynamic size
- Easy insertion and deletion
- No need for continuous memory

## Disadvantages
- Extra memory for pointers
- Slower searching than arrays
- No direct random access

## Conclusion
A linked list is a flexible data structure that is helpful for dynamic memory and frequent updates.
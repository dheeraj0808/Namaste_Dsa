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
ie each and every node has a pointer to the next node is called signly linked list

- Doubly Linked List: each node points to both next and previous nodes
ie in the doubly linked list is value plus 2 pointer one is ahead and one is previous pointer

- Circular Linked List: the last node points back to the first node
i.e.

## Head :- 
head is the starting node of the linked list and generally linked list is represented by its head

## Tail
in linked list tail is basically pointing to null

tail.next === null

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
When the location/reference is already known, Linked List can modify the structure without shifting other elements.

## Array vs linked list

### Array
- Stores elements in continuous memory
- Size is fixed or harder to change 
- Fast access by index
- Insertion and deletion are slow in the middle
- Uses less extra memory
- Better for searching and indexing
- Elements may need shifting
- node = value and pointer 
- In array getting element is easy 

### Linked List
- Stores elements in non-continuous memory
- Size is dynamic
- No direct access by index
- Insertion and deletion are easier
- Uses extra memory for pointers
- Better for frequent updates
- No shifting needed
- node means just value
- in linked list getting element is hard

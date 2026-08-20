/* write a program that will check and if the there is loop then it will return true
 and if the loop is not then return false


1 → 2 → 3 → 4
    ↑       ↓
    └───────┘
    this is a example of the containing loop

--> the main basic idea or solution of this problem is we will traverse to each node 
and if we find any nodes that are already apeared before then we will return true because this will happen 
only when the loop is present , and if untill the node null found no node repeated then we return true
     */

// HASH SET aproach

//While traversing, keep track of every node I've already visited. 
// If I encounter the same node again, there must be a cycle.
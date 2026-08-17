//---> this is the classic example (707 Design linked list ) 

// node : creating a node in linked list
//-> creating a node is a language inguistic
// as the below denoted a linked list example like how a linked list denoted one part is data and one part is pointer to the next node 
// [data | next]
function node (value){
    this.value = value;
    this.next = null;
}
// the above code is representation of a node in a linked list
/* 
when we have to create a new node 
let newNode = new Node (5);
-> here we are just calling the above function and passing the value 
 */

// linked list is representation of its head


// 2. Creating a series of linked list

function myLinkedList(){
    this.head=null;
    this.size=0;
}
//-> this is intialization to linked list basically this linked list is size of 0 now

// 3. getting node value of linked list 

//4. add at head

//5. add at tail

//6. add at index ie just before the index

//7. delete at index ie delete the ith index

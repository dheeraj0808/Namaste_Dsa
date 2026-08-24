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
--> ie creating a instance of node function 
-> here we are just calling the above function and passing the value 
--> that means here we are just calling the function and passing the function and function 
use this.value =5 , and this.next= null 
 */

// linked list is representation of its head


// 2. Creating a series of linked list

function myLinkedList(){
    this.head=null;
    this.size=0;
}
//-> this is intialization to linked list basically this linked list is size of 0 now

// 3. getting node value of linked list 

// getting the node value we will have to reach at the node
function findNodeValue(index){
    if(index<0 || index>=size)return -1;

        let current = this.head;
    for(let i=0;i<index;i++){
current = current.next;
    }
    return current.value;
}

//4. add at head
//---> new node is create , and then new node point to the head and head points to new node

function addAtHead(val){
    let newNode = new Node (val);
    // creating new node first 
    newNode.next=this.head;
    // and my new node point to the head
    this.head=newNode;
    //now head should point to newNode

    this.size++;
    // and at the last we have to increase the length

}

//5. Add to tail
function addAtTail(val){
let newNode = new Node (val);
// calling or creating a instance of new node fuction that will create a new node
if(this.head==null){
    this.head=newNode;
}
// the upper condition means if the heads point to the null that means no element in the linked list so 
// we will just add the new node here

else{

    let current = this.head;
    // in this condtion we assume this to the head and below we iteration to the whole linked list 
    // for the finding that at which node pointing to the null that means that's the current tail
    while(current.next != null){
        current = current.next;
        // these condtion means untill our crr.next is not null we keep on mooving
    }

    current.next = newNode;
    // as we have already reached to the tail so add the new node here ie pointing next to what we have creating

}
this.size++;
}

//6. add at index ie just before the index
function addAtIndex(val , position){
let newNode = new Node (val);

if (position === 0) {
    this.addAtHead(val);
    return;
}
// above is edge case of if we have to add at the 1st position
else if(position===this.size){
    this.addAtTail(val);
    return;
}
// this above case cover the tail case
else{
 //new move current to node before the position 
let current = this.head;
for (let i = 0; i < position - 1; i++) {
        current = current.next;
    }
    current.next=newNode;

}
this.size++;
}

//7. delete a value from linked list

/*in the deletion we have to reach at the the index-1 
and then then link this index to new node (2 step ahead)-> because that centre element have been deleted
->then we have to handle the corner cases 
-> then we have to reduce the size because we have deleted an element
*/
function deleteAtIndex(index){
    // this is the case of if the linked list is of empty size
    if (this.head === null){
        return
    }
    //inavlid position 
    if(index <0 || index>=this.size){
        return -1;
    }
    // this is the case if have to delete at the head node element
    if(index===0){
        this.head=this.head.next;
        this.size--;
        return;
    }

    let curr = this.head;
    for(let i =0;i<index-1;i++){
curr=curr.next;
    }
    //skiping the current target element
    curr.next=curr.next.next;

    //reduce the index
    this.size--;
}

/*Complexity

For deletion at position:

Traversal → O(n)
Actual deletion → O(1)
Overall → O(n)
Extra space → O(1) */
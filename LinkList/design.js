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

function getValueAt(position) {

    if(position<0 || position >=size)return -1;
    // this covers the edge case if not found 

    let current = this.head;

    for (let i = 0; i < position; i++) {
        current = current.next;
    }

    return current.data;
}

//4. add at head
//---> new node is create , and then new node point to the head and head points to new node

function addAtHead(val){
    let newNode = new Node (val);
    newNode.next=this.head;
    this.head=newNode;
    this.size++;

}

//5. add at tail
function addAtTail(val){
let newNode = new Node (val);
if(this.head==null){
    this.head=newNode;
}
else{

    let current = this.head;
    while(current.next != null){
        current = current.next;
    }

    current.next = newNode;

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
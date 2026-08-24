//write a program that will remove the given element from the linked list 

//sentinal node :- Sentinel Node (also called Dummy Node)
// we don't care about the value of the sentival node
// it helps to delete nodes from the starting

function removeElement(head,value){
    let sentinel = new ListNode();
    sentinel.next=head;

    let prev = sentinel;
    while(prev && prev.next){
        if(prev.next.value === value){
prev.next= prev.next.next;
        }
        else{
            prev=prev.next;
        }

    }
    return sentinel.next;

}
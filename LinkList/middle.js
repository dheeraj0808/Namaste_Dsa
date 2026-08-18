//write a program that will return the mid value of the linked list

function midValue(head){
    let slow=head;
    let fast=head;
    while(fast !=null && fast.next !=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow
}
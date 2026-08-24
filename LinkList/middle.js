//write a program that will return the mid value of the linked list

function midValue(head){
    let slow=head;
    let fast=head;
    while(fast !=null && fast.next !=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
}

// this is a slow fast pointer technique in which if the slow pointer moves to one step then fast pointer
// moves to 2 step by doing this , when the slow pointer reaches to middle then at that time fast pointer
// moved to the end 
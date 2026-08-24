//write a program that will reverse the linked list

function reverse(head){
    let prev= null;
    let curr= head;
    while(curr){
// above same while condtion can also be writeen as while(curr !=null)

        let temp = curr.next;

        curr.next=prev;
        prev=curr;
        // here updating the previous to current
        curr=prev;
        // here updating current to previous
    }
    return prev;

}
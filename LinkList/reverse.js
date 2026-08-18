//write a program that will reverse the linked list

function reverse(head){
    let prev= null;
    let curr= head;
    while(curr){
        let temp = curr.next;
        curr.next=prev;
        prev=curr;
        curr=prev;
    }
    return prev;

}
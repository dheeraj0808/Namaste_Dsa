// you have given  head of linked list and integer n
// now you have to remove the Nth node from the end of the linked list
// and return the new head

/*
Example

1 → 2 → 3 → 4 → 5
n = 2

5 → 1st from end
4 → 2nd from end
3 → 3rd from end
2 → 4th from end
1 → 5th from end

So we remove 4.

result:- 
1 → 2 → 3 → 5

Example 2 — Important Edge Case

1 → 2 → 3

n = 3

3 → 1st
2 → 2nd
1 → 3rd

So we remove the head.
Result:
2 → 3

This is one reason the sentinel/dummy node we just learned can be useful.
 */

function removeNthFromEnd(head, n) {

    // covering the edge case 
    let dummy = new ListNode(0);

    dummy.next = head;

    // step 1 finding the length

    let length = 0;
    let curr = head;
    while (curr != null) {
        length++;
        curr = curr.next;
    }

    // now we have got the length ie linked list length 
    //step 2

    let target = length - n + 1;
    curr = dummy;
    // now we have to reach one node before the target node to delete the target
    for (let i = 0; i < target - 1; i++) {
        curr = curr.next;
    }


    // delete the target node as we have reached the just before node we have to delete

    curr.next = curr.next.next;
    return dummy.next;


}
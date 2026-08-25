// write a program to merge two shorted linked list
/*
Merge Two Sorted Lists = Two Pointers

We have two pointers, one for each list:

List 1: 1 → 3 → 5
        ↑
       p1

List 2: 2 → 4 → 6
        ↑
       p2

       At every step:

       compare p1.val and p2.val
          ↓
take the smaller node
          ↓
move THAT pointer forward

for example 

1 vs 2 → take 1 → move p1
3 vs 2 → take 2 → move p2
3 vs 4 → take 3 → move p1
5 vs 4 → take 4 → move p2
5 vs 6 → take 5 → move p1


        Compare
       /       \
     p1         p2
      ↓          ↓
    smaller one wins
          ↓
    add to result
          ↓
 move the pointer
 corresponding to
 the node we selected

*/

/*
Algorithm :-

Create dummy
Create tail

While both lists still have nodes:

    Compare p1 and p2

    If p1 is smaller:
        attach p1
        move p1

    Otherwise:
        attach p2
        move p2

    Move tail

Attach whatever remains

Return dummy.next

*/

function mergeSorted(list1, list2) {
    let dummy = new ListNode(0);
    let tail = dummy
    while (list1 && list2) {
        if (list1.val >= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    // Attach remaining nodes

    if (list1 !== null) {

        tail.next = list1;

    } else {

        tail.next = list2;

    }

    // Dummy itself is not part of the answer

    return dummy.next;
}
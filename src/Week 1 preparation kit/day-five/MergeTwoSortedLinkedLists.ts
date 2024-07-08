/*
Given pointers to the heads of two sorted linked lists, merge them into a single, sorted linked list. Either head pointer may be null meaning that the corresponding list is empty.

* Example
headA refers to 1 -> 3 -> 7 -> NULL 
headB refers to 1 -> 2 -> NULL

The new list is 1 -> 1 -> 2 -> 3 -> 7 -> Null

* Function Description

Complete the mergeLists function in the editor below.

mergeLists has the following parameters:

- SinglyLinkedListNode pointer headA: a reference to the head of a list
- SinglyLinkedListNode pointer headB: a reference to the head of a list

* Returns

- SinglyLinkedListNode pointer: a reference to the head of the merged list
Input Format

The first line contains an integer t, the number of test cases.

The format for each test case is as follows:

The first line contains an integer n, the length of the first linked list.
The next n lines contain an integer each, the elements of the linked list.
The next line contains an integer m, the length of the second linked list.
The next  lines contain an integer each, the elements of the second linked list.

Constraints

 - 1 <= t <= 10 s
 - 1 <= n,m <= 1000
 - 1 <= list[i] <= 1000, where list[i] is the i-th element of the list.

* Output Format

, where  is the  element of the list.
Sample Input

1
3
1
2
3
2
3
4
Sample Output

1 2 3 3 4 
*/

export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

export function mergeLists(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  if (headA === null) return headB;
  if (headB === null) return headA;

  let mergedHead: ListNode | null = null;
  let current: ListNode | null = null;

  if (headA.val <= headB.val) {
    mergedHead = headA;
    headA = headA.next;
  } else {
    mergedHead = headB;
    headB = headB.next;
  }

  current = mergedHead;

  // Merge the list
  while (headA !== null && headB !== null) {
    if (headA.val <= headB.val) {
      current.next = headA;
      headA = headA.next;
    } else {
      current.next = headB;
      headB = headB.next;
    }
    current = current.next;
  }

  //if there are remaining nodes in either list, append them
  if (headA === null) {
    current.next = headB;
  } else {
    current.next = headA;
  }

  return mergedHead;
}



export function testMergeList() {
    // Create the first linked list: 1 -> 3 -> 7
    let headA = new ListNode(1);
    headA.next = new ListNode(3);
    headA.next.next = new ListNode(7);

    // Create the second linked list: 1 -> 2
    let headB = new ListNode(1);
    headB.next = new ListNode(2);

    //merge the lists
    let mergedList = mergeLists(headA, headB);

    // printing the merged list
    let current: ListNode | null = mergedList;
    let result: number[] = [];
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }

    console.log(result.join(" ")) // output: 1 1 2 3 7
}


testMergeList();
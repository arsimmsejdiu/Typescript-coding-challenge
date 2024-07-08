import { assert, describe, it } from "vitest";
import {
  ListNode,
  mergeLists,
} from "../Week 1 preparation kit/day-five/MergeTwoSortedLinkedLists";

describe("", () => {
  it("should merge two sorted linked lists correctly", () => {
    let headA = new ListNode(1);
    headA.next = new ListNode(3);
    headA.next.next = new ListNode(7);

    // Create the second linked list 2 -> 4 -> 6
    let headB = new ListNode(1);
    headB.next = new ListNode(2);

    // Merge  the lists
    let mergedHead = mergeLists(headA, headB);

    // prepare execution results
    let expected = [1, 1, 2, 3, 7];

    // Verify the merged lists value
    let current: ListNode | null = mergedHead;
    let result: number[] = [];
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }

    // Assert that the result matches the expected values
    assert.deepStrictEqual(result, expected);
  });

  it("should merge two sorted linked lists correctly", () => {
    // Create the first linked list: 1 -> 3 -> 7
    let headA2 = new ListNode(1);
    headA2.next = new ListNode(3);
    headA2.next.next = new ListNode(7);

    // Create the second linked list: 1 -> 2
    let headB2 = new ListNode(1);
    headB2.next = new ListNode(2);

    // Merge the lists using variant 2 of mergeLists
    let mergedList2 = mergeLists(headA2, headB2);

    // Prepare expected result: 1 -> 1 -> 2 -> 3 -> 7
    let expectedValues2 = [1, 1, 2, 3, 7];

    // Verify the merged list values
    let current2: ListNode | null = mergedList2;
    let result2: number[] = [];
    while (current2 !== null) {
      result2.push(current2.val);
      current2 = current2.next;
    }

    // Assert that the result matches the expected values
    assert.deepStrictEqual(result2, expectedValues2);
  });

  it("should merge two sorted linked lists correctly", () => {
    // Create the first linked list: 2 -> 4 -> 6
    let headA3 = new ListNode(2);
    headA3.next = new ListNode(4);
    headA3.next.next = new ListNode(6);

    // Create the second linked list: 1 -> 3 -> 5
    let headB3 = new ListNode(1);
    headB3.next = new ListNode(3);
    headB3.next.next = new ListNode(5);

    // Merge the lists using variant 1 of mergeLists
    let mergedList3 = mergeLists(headA3, headB3);

    // Prepare expected result: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    let expectedValues3 = [1, 2, 3, 4, 5, 6];

    // Verify the merged list values
    let current3: ListNode | null = mergedList3;
    let result3: number[] = [];
    while (current3 !== null) {
      result3.push(current3.val);
      current3 = current3.next;
    }

    // Assert that the result matches the expected values
    assert.deepStrictEqual(result3, expectedValues3);
  });

  it("should merge two sorted linked lists correctly", () => {
    // Create the first linked list: 2 -> 4 -> 6
    let headA4 = new ListNode(2);
    headA4.next = new ListNode(4);
    headA4.next.next = new ListNode(6);

    // Create the second linked list: 1 -> 3 -> 5
    let headB4 = new ListNode(1);
    headB4.next = new ListNode(3);
    headB4.next.next = new ListNode(5);

    // Merge the lists using variant 2 of mergeLists
    let mergedList4 = mergeLists(headA4, headB4);

    // Prepare expected result: 1 -> 2 -> 3 -> 4 -> 5 -> 6
    let expectedValues4 = [1, 2, 3, 4, 5, 6];

    // Verify the merged list values
    let current4: ListNode | null = mergedList4;
    let result4: number[] = [];
    while (current4 !== null) {
      result4.push(current4.val);
      current4 = current4.next;
    }

    // Assert that the result matches the expected values
    assert.deepStrictEqual(result4, expectedValues4);
  });
});

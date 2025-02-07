//You are given the heads of two sorted linked lists list1 and list2.
//
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
//
// Return the head of the merged linked list.

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

const mergeTwoLists = (list1, list2) => {
    const dummyNode = new ListNode()
    //  I am linking the sorted numbers in the prev list node and pointing to the next one and then moving to the next list node
    let prev = dummyNode

    let current1 = list1
    let current2 = list2

    while (current1 && current2) {
        if (current1.val <= current2.val) {
            prev.next = current1
            prev = current1
            current1 = current1.next
        } else {
            prev.next = current2
            prev = current2
            current2 = current2.next
        }
    }

    if (current1) prev.next = current1;
    if (current2) prev.next = current2;

    // why is dummnyNode.next return a list of the values and not just the next LinkedNode?????
    return dummyNode.next;
};

// Notes:
// In a singly linked list,each node only holds a reference to the next node in the sequence,
// not to the node after the next.
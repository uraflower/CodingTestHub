/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let node = head;
    while (node?.next) {
        if (node.val === null) {
            return true;
        }
        node.val = null;
        node = node.next;
    }
    return false;
};
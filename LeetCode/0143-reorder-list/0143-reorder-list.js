/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const nodes = {};

    let current = head
    let n = 0;
    while (current) {
        nodes[n] = current;
        current = current.next;
        nodes[n].next = null;
        n++
    }

    for (let i = 0; i < Math.floor(n / 2); i++) {
        nodes[i].next = nodes[n - i - 1];
        if (n - i - 1 !== i + 1) {
            nodes[n - i - 1].next = nodes[i + 1];
        }
    }
};
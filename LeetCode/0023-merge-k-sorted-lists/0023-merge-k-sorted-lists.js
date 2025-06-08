/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
    const counter = {};

    for (let list of lists) {
        let node = list;
        while (node) {
            counter[node.val] = (counter[node.val] || 0) + 1;
            node = node.next;
        }
    }

    let head = new ListNode();
    let current = head;
    const entries = Object.entries(counter);

    for (let i = 0; i < entries.length; i++) {
        const [val, count] = entries[i];
        
        for (let j = 0; j < count; j++) {
            const node = new ListNode(Number(val));
            current.next = node;
            current = current.next;
        }
    }

    return head.next;
};

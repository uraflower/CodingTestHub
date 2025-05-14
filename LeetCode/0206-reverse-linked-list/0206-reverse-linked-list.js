/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function (head) {
    const newHead = new ListNode();

    function _reverseList(head) {
        if (!head) {
            return newHead;
        }

        const reversedHead = _reverseList(head.next);
        reversedHead.next = new ListNode(head.val, null);

        return reversedHead.next;
    }

    _reverseList(head);
    return newHead.next;
};
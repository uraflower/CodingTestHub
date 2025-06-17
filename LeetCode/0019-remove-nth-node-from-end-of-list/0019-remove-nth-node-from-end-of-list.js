/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    function dfs(node) {
        // 마지막 노드이면 1 반환
        if (!node.next) {
            return 1;
        }

        const nth = dfs(node.next);
        if (nth === n) {
            node.next = node.next.next ?? null;
        }

        return nth + 1;
    }

    if (dfs(head) === n) {
        return head.next;
    }

    return head;
};
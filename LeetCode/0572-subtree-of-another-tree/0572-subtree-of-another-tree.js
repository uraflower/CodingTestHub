/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
const isSubtree = function (root, subRoot) {
    // 탐색을 하다가 서브트리의 루트 val과 일치하는 노드가 있으면
    // 거기서부터 비교 시작
    // 만약 비교했는데 다르면 비교 시작한 부분부터 다시
    // 아니면 두 트리를 정렬한 다음 비교 => 이건 val이 같은 경우가 많을 때가 있으니까 안될듯

    const isSame = function (node1, node2) {
        if (!node1 && !node2) return true;
        if (node1?.val !== node2?.val) return false;

        return isSame(node1.left, node2.left) && isSame(node1.right, node2.right);
    }

    if (!subRoot) return true;
    if (!root) return false;
    return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
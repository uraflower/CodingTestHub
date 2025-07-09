/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
    // preorder: v l r
    // inorder: l v r

    // preorder의 가장 첫 요소는 무조건 root
    // inorder에서 root보다 왼쪽에 있는 요소는 전부 left임
    // 여기서 중복되는 value가 없어야 하는데 문제에서 없음을 보장함
    // 따라서 preorder[0]을 inorder에서 찾고
    // 그 왼쪽, 오른쪽으로 배열을 나눠서 이걸 반복

    function dfs(start, end) {
        if (start >= end) {
            return null;
        }
        
        const root = new TreeNode(preorder.shift());
        const idx = inorder.slice(start, end).findIndex((v) => v === root.val);

        root.left = dfs(start, start + idx);
        root.right = dfs(start + idx + 1, end);

        return root;
    }

    return dfs(0, inorder.length);
};
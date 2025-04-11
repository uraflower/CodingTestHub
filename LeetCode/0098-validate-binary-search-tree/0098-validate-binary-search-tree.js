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
 * @return {boolean}
 */
const isValidBST = function(root) {
    const inorder = [];
    inorderTraversal(root, inorder);

    return inorder.every((val, i, arr) => i === 0 || arr[i-1] < val)
};

function inorderTraversal(current, result) {
    if (current.left) {
        inorderTraversal(current.left, result);
    }

    result.push(current.val);

    if (current.right) {
        inorderTraversal(current.right, result);
    }
}
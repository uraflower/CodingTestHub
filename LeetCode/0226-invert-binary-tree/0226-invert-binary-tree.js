/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function (root) {
    const queue = [root]; // TreeNode[]

    while (queue.length) {
        const current = queue.shift();

        if (current !== null) {
            queue.push(current.right);
            queue.push(current.left);
            [current.right, current.left] =  [current.left, current.right];
        }
    }

    return root;
};
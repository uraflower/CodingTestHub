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
 * @return {number}
 */
const maxDepth = function(root) {
    let maxDepth = 0;

    function bfs(node, depth) {
        if (!node) return;
        
        depth += 1;
        if (maxDepth < depth) maxDepth = depth;
        bfs(node.left, depth);
        bfs(node.right, depth);
    }

    bfs(root, maxDepth);
    return maxDepth;
};


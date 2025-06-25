/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    let [smaller, bigger] = p.val <= q.val ? [p, q] : [q, p];

    function recursion(root) {
        if (smaller.val <= root.val && root.val <= bigger.val) {
            return root;
        }

        if (smaller.val <= root.val && bigger.val <= root.val) {
            return lowestCommonAncestor(root.left, p, q);
        } else {
            return lowestCommonAncestor(root.right, p, q);
        }
    }

    return recursion(root);
};
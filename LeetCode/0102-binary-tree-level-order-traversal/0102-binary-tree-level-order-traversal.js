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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (!root) return [];
    
    const queue = [[root]];
    const output = [];

    while (queue.length) {
        const curNodes = queue.shift();
        const newNodes = [];
        const newOutput = [];

        curNodes.forEach((node) => {
            newOutput.push(node.val);
            if (node.left) newNodes.push(node.left);
            if (node.right) newNodes.push(node.right);
        });

        if (newNodes.length) queue.push(newNodes);
        output.push(newOutput)
    }
    return output;
};

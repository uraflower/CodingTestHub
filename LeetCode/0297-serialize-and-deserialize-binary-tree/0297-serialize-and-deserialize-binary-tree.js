/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const NULL_SIGN = 'X';

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function (root) {
    const result = [];

    function traverse(root) {
        result.push(root?.val ?? NULL_SIGN);
        if (!root) {
            return;
        }
        traverse(root.left);
        traverse(root.right);
    }

    traverse(root);
    return result.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function (data) {
    const splited = data.split(',');
    let i = 0;

    function traverse() {
        if (splited[i] === NULL_SIGN) {
            return null;
        }

        const node = new TreeNode(Number(splited[i]));
        i += 1;
        node.left = traverse();
        i += 1;
        node.right = traverse();

        return node;
    }

    return traverse();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    return build(0, nums.length);

    function build(start, end) {
        if (start === end) {
            return null;
        }

        const mid = Math.floor((start + end) / 2);
        return new TreeNode(
            nums[mid],
            build(start, mid),
            build(mid+1, end),
        );
    }
};
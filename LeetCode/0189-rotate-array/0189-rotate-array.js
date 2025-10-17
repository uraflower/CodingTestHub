/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const steps = k % nums.length;

    const tail = nums.splice(nums.length - steps, steps);
    nums.unshift(...tail);
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    const len = nums.length;
    const memo = Array.from({length: len}).fill(Infinity);
    memo[len - 1] = 0;

    for (let i = len - 2; i >= 0; i--) {
        memo[i] = 1 + Math.min(...memo.slice(i, i + nums[i] + 1));
    }

    return nums[0];
};
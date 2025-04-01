/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const count = {};
    nums.forEach((num) => {
        count[num] = count[num] + 1 || 1;
    });
    return Object.keys(count).sort((a, b) => count[b] - count[a]).slice(0, k).map(Number);
};
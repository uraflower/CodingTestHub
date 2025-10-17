/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const counter = {};

    nums.forEach((num) => counter[num] = counter[num] + 1 || 1);

    const sortedEntries = Object.entries(counter).sort((a, b) => Number(b[1]) - Number(a[1]));

    return Number(sortedEntries[0][0]);
};
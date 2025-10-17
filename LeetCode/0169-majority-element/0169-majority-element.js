/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const counter = {};
    nums.forEach((num) => counter[num] = counter[num] + 1 || 1);

    let maxK = null;
    let maxV = 0;
    for (const [k, v] of Object.entries(counter)) {
        if (v > maxV) {
            maxK = k;
            maxV = v;
        }
    }

    return Number(maxK);
};
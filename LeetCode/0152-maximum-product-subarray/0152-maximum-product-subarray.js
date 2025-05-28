/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    const minDP = [...nums];
    const maxDP = [...nums];

    for (let i = 1; i < nums.length; i++) {
        min = Math.min(minDP[i], maxDP[i - 1] * minDP[i], minDP[i - 1] * maxDP[i]);
        max = Math.max(maxDP[i], maxDP[i - 1] * maxDP[i], minDP[i - 1] * minDP[i]);
        minDP[i] = min
        maxDP[i] = max
    }

    return Math.max(...maxDP);
};
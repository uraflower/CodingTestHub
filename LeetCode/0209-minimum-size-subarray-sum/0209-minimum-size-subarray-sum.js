/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let min = Infinity;

    while (start < nums.length - 1) {
        while (sum < target && end < nums.length) {
            sum += nums[end];
            end++;
        }
        
        while (sum >= target && start <= end) {
            min = Math.min(min, end - start);
            sum -= nums[start];
            start++;
        }

        if (sum < target && end === nums.length) {
            break;
        }
    }

    return min === Infinity ? 0 : min;
};
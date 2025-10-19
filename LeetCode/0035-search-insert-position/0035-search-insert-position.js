/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length;
    let mid = Math.floor((left + right) / 2);

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (target < nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }

    }

    return left;
};
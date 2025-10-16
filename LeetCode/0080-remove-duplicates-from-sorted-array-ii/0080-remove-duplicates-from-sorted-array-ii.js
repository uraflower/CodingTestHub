/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;

    for (let i = 0; i < nums.length;) {
        if (nums[i] === nums[i-1] && nums[i] === nums[i+1]) {
            i++;
        } else {
            nums[j] = nums[i];
            i++;
            j++;
        }
    }

    nums.splice(j, nums.length - j);
};
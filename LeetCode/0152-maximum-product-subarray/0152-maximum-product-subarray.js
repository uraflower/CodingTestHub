/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
    let min = nums[0];
    let max = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let tempMin = Math.min(nums[i], min * nums[i], max * nums[i]);
        let tempMax = Math.max(nums[i], min * nums[i], max * nums[i]);
        min = tempMin;
        max = tempMax;
        result = Math.max(result, max);
        console.log(nums[i], min, max, result);
    }


    return result;
}
/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    const arr = Array.from({length: nums.length + 1 }).map((_, index) => index);
    const set = new Set(arr);

    for (let num of nums) {
        set.delete(num);
    }
    
    return [...set].pop();
};
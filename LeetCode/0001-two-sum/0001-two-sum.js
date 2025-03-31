/**
 * 
 * @param {number[]} nums 숫자 배열
 * @param {number} target nums 내 두 숫자를 합쳐서 만들 수 있는 숫자
 * @return {number[]} 합이 target인 두 숫자의 인덱스
 */
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const j = nums.findIndex((num, idx) => num === diff && idx !== i);

        if (j !== -1) {
            return [i, j];
        }
    }
};
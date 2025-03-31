/**
 * 
 * @param {number[]} nums 숫자 배열
 * @param {number} target nums 내 두 숫자를 합쳐서 만들 수 있는 숫자
 * @return {number[]} 합이 target인 두 숫자의 인덱스
 */
const twoSum = function(nums, target) {
    const numsIdx = {};
    nums.forEach((num, idx) => {
        if (!numsIdx[num]) numsIdx[num] = [idx];
        else numsIdx[num].push(idx);
    });


    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        const j = numsIdx[diff]?.find((idx) => idx !== i);

        if (j) {
            return [i, j];
        }
    }
};
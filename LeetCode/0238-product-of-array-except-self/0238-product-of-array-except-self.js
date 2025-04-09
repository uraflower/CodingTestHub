/**
 * 주어진 배열에서 자기 자신을 제외하고 나머지 원소를 곱한 값으로 구성된 배열을 반환하는 함수
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function(nums) {
    const dp1 = []; // left to right
    const dp2 = []; // right to left

    for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
        dp1[i] = (dp1[i-1] ?? 1) * nums[i];
        dp2[j] = (dp2[j+1] ?? 1) * nums[j];
    }

    return nums.map((_, i) => (dp1[i-1] ?? 1) * (dp2[i+1] ?? 1));
};

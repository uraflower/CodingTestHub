/**
 * 주어진 배열에서 가장 긴 증가하는 수열의 길이를 반환하는 함수
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
    const lengths = [];

    nums.forEach((num, index) => {
        const smallers = lengths.filter((_, idx) => nums[idx] < num);
        const max = Math.max(0, ...smallers);
        lengths.push(max + 1);
    });

    return Math.max(...lengths);
};

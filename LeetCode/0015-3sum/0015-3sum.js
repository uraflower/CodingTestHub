/**
 * 주어진 배열 중 세 원소의 합이 0인 고유한 경우를 반환하는 함수
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const answer = new Set();
    const sorted = nums.toSorted((a, b) => Number(a) - Number(b));

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        let left = i + 1;
        let right = sorted.length - 1;
        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];

            if (sum > 0) right--;
            else if (sum < 0) left++;
            else {
                answer.add([sorted[i], sorted[left], sorted[right]].sort().join(' '));
                right--;
            }
        }
    }

    return Array.from(answer).map((triplet) => triplet.split(' ').map(Number));
};

// 시간복잡도: O(n^2)
// 공간복잡도: O(n)
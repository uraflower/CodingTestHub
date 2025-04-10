/**
 * 주어진 배열 중 세 원소의 합이 0인 고유한 경우를 반환하는 함수
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const counter = nums.reduce((counter, num) => {
        counter[num] = (counter[num] ?? 0) + 1;
        return counter;
    }, {});

    const answer = new Set();
    const keys = Object.keys(counter);

    // 세 숫자가 서로 다른 경우
    for (let i = 0; i < keys.length; i++) {
        for (let j = i + 1; j < keys.length; j++) {
            const numK = -(keys[i] + keys[j]);

            if (counter[numK]) {
                let count = counter[numK];
                if (keys[i] === numK) count--;
                if (keys[j] === numK) count--;
                
                if (count >= 1) answer.add([keys[i], keys[j], numK].sort().join(' '));
            }
        }
    }

    // 세 숫자 중 중복이 있는 경우
    for (let num of keys) {
        // 중복이 없으면 건너뛰기
        if (counter[num] === 1) continue;

        // 숫자가 0이면 세 숫자 모두 0이어야 하므로 따로 처리
        if (num === 0 && counter[num] >= 3) {
            answer.add('0 0 0');
            continue;
        }

        // 두 숫자가 중복인 경우
        const numK = -(num * 2);
        if (counter[numK]) {
            answer.add([num, num, numK].sort().join(' '));
        }
    }

    return Array.from(answer).map((triplet) => triplet.split(' ').map(Number));
};
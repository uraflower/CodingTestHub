/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    const sorted = Array.from(new Set(nums)).sort((a, b) => Number(a) - Number(b));

    let maxLength = 0;
    let currentSequenceLength = 0;

    for (let i = 0; i < sorted.length; i++) {
        if (i === 0) {
            maxLength = 1;
            currentSequenceLength = 1;
            continue;
        }

        if (sorted[i] === sorted[i - 1] + 1) {
            currentSequenceLength += 1;
        } else {
            currentSequenceLength = 1;
        }

        maxLength = Math.max(maxLength, currentSequenceLength);
    }

    return maxLength;
};
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 const characterReplacement = function(s, k) {
    let start = 0;
    let end = 0;
    let counter = {};
    let maxRepeatedCount = 0; // 현재 구간에 가장 많이 포함되어 있는 알파벳의 총 개수
    let maxLength = 0;

    while (start <= end && end < s.length) {
        counter[s[end]] = (counter[s[end]] || 0) + 1;
        maxRepeatedCount = Math.max(maxRepeatedCount, counter[s[end]]);

        if (end - start + 1 - maxRepeatedCount > k) {
            counter[s[start]]--;
            start++;
        }

        maxLength = Math.max(end - start + 1, maxLength);
        end++;
    }

    return maxLength;
};
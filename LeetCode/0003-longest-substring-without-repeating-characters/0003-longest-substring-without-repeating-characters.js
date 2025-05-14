/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let start = 0;
    let end = 0;

    const set = new Set();
    let maxSize = 0;

    while (end < s.length) {
        if (set.has(s[end])) {
            maxSize = Math.max(maxSize, set.size);
            set.clear();
            start = end;
        }

        set.add(s[end]);
        end++;
    }

    maxSize = Math.max(maxSize, set.size);
    return maxSize;
};
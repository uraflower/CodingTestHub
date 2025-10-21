/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const counter = Array.from(magazine).reduce((obj, char) => {
        obj[char] = obj[char] + 1 || 1;
        return obj;
    }, {});

    for (const char of ransomNote) {
        if (!counter[char] || counter[char] === 0) return false;

        counter[char]--;
    }

    return true;
};
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
    const [str1, str2] = text1.length > text2.length ? [text2, text1] : [text1, text2];
    let current = 0;
    let count = 0;

    for (const char of str1) {
        const idx = str2.indexOf(char, current);
        if (idx !== -1) {
            current = idx + 1;
            count += 1;
        }
    }

    return count;
};
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
    const dp = {};
    const dict = new Set(wordDict);

    function recurse(prev, str) {
        if (str === '') {
            return true;
        } else {
            dp[prev] = false;
        }

        let substr = '';
        for (let i = 0; i < str.length; i++) {
            substr += str[i];

            if (dict.has(substr)) {
                if (dp[prev + substr] === false) continue;
                if (recurse(prev + substr, str.replace(substr, ''))) {
                    return true;
                }
            }
        }

        return false;
    }

    return recurse('', s);
};
/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        let substring = '';
        for (let j = i; j < s.length; j++) {
            substring += s[j];
            if (substring.length > answer.length && isPalindrome(substring)) {
                answer = substring;
            }
        }
    }

    return answer;
};

function isPalindrome(str) {
    const mid = Math.floor(str.length / 2);

    for (let i = 0; i < mid; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }

    return true;
}
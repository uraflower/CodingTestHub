/**
 * 주어진 문자열이 조건을 만족하는 회문인지 여부를 반환하는 함수
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    filtered = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    for (let left = 0, right = filtered.length - 1; left < right; left++, right--) {
        if (filtered[left] !== filtered[right]) {
            return false;
        }
    }

    return true;
};


function isAlphanumeric(char) {
    return char !== ' ' && (('a' <= char && char <= 'z') || !Number.isNaN(Number(char)));
}
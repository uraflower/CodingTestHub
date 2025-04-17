/**
 * 주어진 문자열을 복호화하는 경우의 수를 반환하는 함수
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
    const dp = {};

    function decode(idx) {
        if (s[idx] === '0') {
            return 0;
        }

        if (idx === s.length) {
            return 1;
        }

        if (dp[idx]) {
            return dp[idx];
        }

        let result = 0;
        result += decode(idx + 1);
        if (s[idx + 1] && Number(s[idx] + s[idx+1]) <= 26) {
            result += decode(idx + 2);
        }

        dp[idx] = result;
        return result;
    }

    return decode(0);
};
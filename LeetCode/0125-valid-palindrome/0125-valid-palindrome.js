/**
 * 주어진 문자열이 조건을 만족하는 회문인지 여부를 반환하는 함수
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    const filtered = Array.from(s).reduce((str, char) => {
        if (char !== ' ' && isAlphanumeric(char)) {
            str += char.toLowerCase();
        }

        return str;
    }, '');

    for (let i = 0; i < Math.floor(filtered.length / 2); i++) {
        if (filtered[i] !== filtered[filtered.length - 1 - i]) {
            return false;
        }
    }

    return true;
};


function isAlphanumeric(char) {
    const ASCII_a = 'a'.charCodeAt();
    const ASCII_z = 'z'.charCodeAt();
    const ASCII_char = char.toLowerCase().charCodeAt();
    return (ASCII_a <= ASCII_char && ASCII_char <= ASCII_z) || !Number.isNaN(Number(char));
}
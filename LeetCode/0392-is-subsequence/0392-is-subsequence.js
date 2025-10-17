/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let current = 0; // index of s
    let i = 0; // index of t

    while (current < s.length && i < t.length) {
        if (s[current] === t[i]) {
            current++;
        }
        i++;
    }

    return current === s.length;
};
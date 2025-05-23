/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function(s) {
    let count = 0;

    for (let i = 0; i <s.length; i++) {
        let substr = '';
        let reversed = '';

        for (let j = i; j < s.length; j++){
            substr += s[j];
            reversed = s[j] + reversed;
            if (substr === reversed) {
                count += 1;
            }
        }
    }

    return count;
};
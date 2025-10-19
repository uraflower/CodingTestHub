/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const stack = [];
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    for (const roman of s) {
        let val = map[roman];
        if (stack[stack.length - 1] < val) {
            val -= stack.pop();
        }
        stack.push(val);
    }

    return stack.reduce((sum, val) => sum + val, 0);
};
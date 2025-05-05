/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
    const stack = [];

    for (const bracket of s) {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stack.push(bracket);
            continue;
        }

        const popped = stack.pop();
        if (!((bracket === ')' && '(' === popped)
            || (bracket === ']' && '[' === popped)
            || (bracket === '}' && '{' === popped))) {
            return false;
        }
    }

    return stack.length === 0;
};
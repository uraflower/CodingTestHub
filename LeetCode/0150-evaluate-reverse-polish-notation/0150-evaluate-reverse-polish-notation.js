/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const operators = ['+', '-', '*', '/'];
    const stack = [];

    for (const token of tokens) {
        console.log('token:',token)

        if (operators.includes(token)) {
            const second = stack.pop();
            const first = stack.pop();

            if (token === '+') {
                stack.push(first + second);
            } else if (token === '-') {
                stack.push(first - second);
            } else if (token === '*') {
                stack.push(first * second);
            } else if (token === '/') {
                stack.push(~~(first / second));
                // Math.floor 대신 ~~를 사용해 정수만 남김
                // Math.floor(-1.3) => -2
                // ~~(-1.3) => -1
            }
        } else {
            stack.push(Number(token));
        }

        console.log(stack);
    }

    return stack.pop();
};
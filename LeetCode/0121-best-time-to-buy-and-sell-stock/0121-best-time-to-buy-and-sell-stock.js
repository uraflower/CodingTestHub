/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    const stack = [];
    let max = 0;

    for (const price of prices) {
        while (stack.length > 0 && stack[stack.length - 1] > price) {
            stack.pop();
        }

        stack.push(price);
        max = Math.max(max, stack[stack.length - 1] - stack[0]);
    }

    return max;
};

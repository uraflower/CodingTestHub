/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = function(coins, amount) {
    const sorted = coins.toSorted((a, b) => Number(b) - Number(a));
    let count = 0;
    let rest = amount;
    for (let coin of sorted) {
        count += Math.floor(rest / coin);
        rest %= coin;
        if (rest === 0) return count;
    }

    return -1;
};
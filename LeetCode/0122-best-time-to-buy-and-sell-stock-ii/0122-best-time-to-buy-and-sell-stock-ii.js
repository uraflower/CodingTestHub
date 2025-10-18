/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minStock = prices[0];
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (minStock < prices[i]) {
            profit += prices[i] - minStock;
            minStock = prices[i];
        } else {
            minStock = Math.min(minStock, prices[i]);
        }
    }

    return profit;
};
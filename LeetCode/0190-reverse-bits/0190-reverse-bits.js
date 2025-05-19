/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
    const binary = n.toString(2).padStart(32, '0');
    const reversed = Array.from(binary).reverse().join('');
    const decimal = parseInt(reversed, 2).toString(10);

    return Number(decimal);
};
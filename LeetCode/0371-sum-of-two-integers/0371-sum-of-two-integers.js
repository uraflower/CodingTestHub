/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getSum = function (a, b) {
    return (a ^ b) + ((a & b) << 1);
};
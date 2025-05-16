/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const zeroRows = new Set();
    const zeroCols = new Set();

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === 0) {
                zeroRows.add(r);
                zeroCols.add(c);
            }
        }
    }

    zeroRows.forEach((row) => matrix[row] = Array(cols).fill(0));
    zeroCols.forEach((col) => {
        for (let r = 0; r < rows; r++) {
            matrix[r][col] = 0;
        }
    })
};
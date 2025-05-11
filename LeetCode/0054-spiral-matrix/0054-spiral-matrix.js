/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    let minRow = 0;
    let minCol = 0;
    let maxRow = matrix.length - 1;
    let maxCol = matrix[0].length - 1;

    const output = [];

    while (minRow <= maxRow && minCol <= maxCol) {
        for (let c = minCol; c <= maxCol; c++) {
            output.push(matrix[minRow][c]);
        }

        minRow += 1;
        if (minRow > maxRow) break;
        
        for (let r = minRow; r <= maxRow; r++) {
            output.push(matrix[r][maxCol]);
        }

        maxCol -= 1;
        if (minCol > maxCol) break;
        
        for (let c = maxCol; c >= minCol; c--) {
            output.push(matrix[maxRow][c]);
        }
        

        maxRow -= 1;
        if (minRow > maxRow) break;

        for (let r = maxRow; r >= minRow; r--) {
            output.push(matrix[r][minCol]);
        }

        minCol += 1;
    }

    return output;
};
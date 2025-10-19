/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    // 각 행의 맨 앞 숫자를 target과 비교해, 탐색할 행 고르기
    if (target < matrix[0][0] || target > matrix[m - 1][n - 1]) {
        return false;
    }

    let low = 0
    let high = m;
    let mid = low;

    while (low < high) {
        mid = Math.floor((low + high) / 2);

        if (target < matrix[mid][0]) {
            high = mid;
        } else if (target > matrix[mid][0]) {
            low = mid + 1;
        } else {
            break;
        }
    }

    // row에서 target 탐색
    const row = matrix[mid];

    low = 0;
    high = n;
    mid = 0;

    if (target < row[0] || target > row[n - 1]) {
        return false;
    }

    while (low < high) {
        mid = Math.floor((low + high) / 2);

        if (target < row[mid]) {
            high = mid;
        } else if (target > row[mid]) {
            low = mid + 1;
        } else {
            return true;
        }
    }

    console.log('매치 없음');
    return false;
};

/**
 * 스도쿠가 유효한지 판별
 * 주어진 칸만으로 풀 수 있는지가 아니라 채워진 값만 따졌을 때 오류가 없는지 판별
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const len = board.length;
    const EMPTY = '.';

    // 1. row
    for (let r = 0; r < len; r++) {
        const row = board[r];
        const set = new Set();
        for (let c = 0; c < len; c++) {
            const val = board[r][c];
            if (val !== EMPTY && set.has(val)) return false;
            set.add(val);
        }
    }

    // 2. column
    for (let c = 0; c < len; c++) {
        const set = new Set();
        for (let r = 0; r < len; r++) {
            const val = board[r][c];
            if (val !== EMPTY && set.has(val)) return false;
            set.add(val);
        }
    }

    // 3x3 sub-box
    for (let r = 0; r < len; r += 3) {
        const set = new Set();
        for (let c = 0; c < len; c += 3) {
            const val = board[r][c];
            if (val !== EMPTY && set.has(val)) return false;
            set.add(val);
        }
    }

    return true;
};
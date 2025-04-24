/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const row = board.length;
    const col = board[0].length;

    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];
    const visited = Array.from({ length: row }, () => Array(col).fill(false));
    
    function dfs(r, c, charIdx) {        
        if (charIdx === word.length) return true;
        if (!(0 <= r && r < row && 0 <= c && c < col)) return false;
        if (board[r][c] !== word[charIdx]) return false;
        if (visited[r][c]) return false;

        visited[r][c] = true;
        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];
            if (dfs(nr, nc, charIdx + 1)) return true;
        }
        visited[r][c] = false;
        return false;
    }
    

    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) return true;
        }
    }

    return false;
};

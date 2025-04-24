/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    const visited = Array.from({ length: board.length }).map(() => Array.from({ length: board[0].length }));

    function dfs(r, c, charIdx) {
        // const stack = [[r, c, 0]];
        // const visited = Array.from({ length: board.length }).map(() => Array.from({ length: board[0].length }));

        const dr = [0, 0, 1, -1];
        const dc = [1, -1, 0, 0];

        // while (stack.length) {
        // const [r, c, charIdx] = stack.pop();
        // visited[r][c] = true;

        if (charIdx + 1 === word.length) return true;

        for (let i = 0; i < 4; i++) {
            const nr = r + dr[i];
            const nc = c + dc[i];

            if (0 <= nr && nr < board.length && 0 <= nc && nc < board[0].length && !visited[nr][nc] && word.charAt(charIdx + 1) === board[nr][nc]) {
                // stack.push([nr, nc, charIdx + 1]);
                visited[nr][nc] = true;
                const result = dfs(nr, nc, charIdx + 1);
                if (result) return true;
                if (!result) {
                    visited[nr][nc] = false;
                }
            }
        }
        // }

        return false;
    }
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            if (word.charAt(0) === board[r][c]) {
                visited[r][c] = true;
                const result = dfs(r, c, 0);
                visited[r][c] = false;
                if (result) return true;
            }
        }
    }

    return false;
};
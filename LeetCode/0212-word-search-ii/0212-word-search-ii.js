/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (board, words) {
    const m = board.length;
    const n = board[0].length;
    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];

    return words.filter((word) => {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] !== word[0]) {
                    continue;
                }

                const visited = Array.from({ length: m }).map(() => Array.from({ length: n }).fill(false));

                const search = (r, c, idx) => {
                    visited[r][c] = true;

                    if (word.length === idx + 1) {
                        return true;
                    }

                    for (let k = 0; k < 4; k++) {
                        const nr = r + dr[k];
                        const nc = c + dc[k];

                        if (0 <= nr && nr < m && 0 <= nc && nc < n
                            && !visited[nr][nc]
                            && board[nr][nc] === word[idx + 1]
                            && search(nr, nc, idx + 1)) {
                            return true;
                        }
                    }

                    visited[r][c] = false;
                    return false;
                }

                if (search(i, j, 0)) {
                    return true;
                };
            }
        }

        return false;
    });
};
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    // bfs
    // queue 순회 시 요소를 shift하지 않고 index 활용
    // 만약 외곽에 위치한 칸이 없었으면 queue를 다시 돌면서 O -> X 교체

    const rows = board.length;
    const cols = board[0].length;
    const O = 'O';
    const X = 'X';
    const visited = Array.from({ length: rows })
        .map(() => Array.from({ length: cols }).fill(false));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (!visited[i][j] && board[i][j] === O) {
                bfs(i, j);
            }
        }
    }

    function bfs(r, c) {
        const queue = [[r, c]];
        let pos = 0;

        const dr = [0, 0, 1, -1];
        const dc = [1, -1, 0, 0];

        let onEdge = isOnEdge(r, c);

        while (queue[pos]) {
            const [r, c] = queue[pos];
            pos++;

            for (let i = 0; i < 4; i++) {
                const nr = r + dr[i];
                const nc = c + dc[i];

                if (0 <= nr && nr < rows && 0 <= nc && nc < cols
                    && board[nr][nc] === O && !visited[nr][nc]) {
                    if (isOnEdge(nr, nc)) {
                        onEdge = true;
                    }
                    visited[nr][nc] = true;
                    queue.push([nr, nc]);
                }
            }
        }

        if (!onEdge) {
            pos = 0;
            while (pos < queue.length) {
                const [r, c] = queue[pos];
                pos++;

                board[r][c] = X;
            }
        }
    }

    function isOnEdge(r, c) {
        return 0 === r || r === rows - 1 || 0 === c || c === cols - 1;
    }
};
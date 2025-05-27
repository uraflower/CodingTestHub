/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
    const rows = heights.length;
    const cols = heights[0].length;

    const pacific = Array.from({ length: rows }, () => Array(cols).fill(false));
    const atlantic = Array.from({ length: rows }, () => Array(cols).fill(false));

    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    // search
    function bfs(r, c, visited) {
        visited[r][c] = true;

        const queue = [[r, c]];

        while (queue.length) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of direction) {
                const nr = r + dr;
                const nc = c + dc;

                if (0 <= nr && nr < rows && 0 <= nc && nc < cols
                    && !visited[nr][nc]
                    && heights[nr][nc] >= heights[r][c]
                ) {
                    queue.push([nr, nc]);
                    visited[nr][nc] = true;
                }
            }
        }
    }

    for (let r = 0; r < rows; r++) {
        bfs(r, 0, pacific);
        bfs(r, cols - 1, atlantic);
    }

    for (let c = 0; c < cols; c++) {
        bfs(0, c, pacific);
        bfs(rows - 1, c, atlantic);
    }

    // 각 cell 순회 및 결과 계산
    const result = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};

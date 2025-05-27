/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
    // 각 cell을 순회
    // cell의 동서남북 살피면서 물이 흐를 수 있으면 search
    // search 결과 태평양 및 대서양에 닿으면 result에 추가

    const rows = heights.length;
    const cols = heights[0].length;

    // 각 cell에 태평양 및 대서양에 도달 가능한지 정보를 저장(메모)
    const info = Array.from({ length: rows }, () => Array.from({ length: cols }, () => ({ p: false, a: false, visited: false })));

    // search
    function dfs(r, c) {
        info[r][c].visited = true;

        if (r === 0 || c === 0) {
            info[r][c].p = true;
        }
        if (r === rows - 1 || c === cols - 1) {
            info[r][c].a = true;
        }

        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];

        for (let i = 0; i < 4; i++) {
            if (info[r][c].p && info[r][c].a) {
                return { p: true, a: true };
            }

            const nr = r + dx[i];
            const nc = c + dy[i];

            if (0 <= nr && nr < heights.length && 0 <= nc && nc < heights[0].length && heights[r][c] >= heights[nr][nc]) {
                let p, a;
                if (info[nr][nc].visited) {
                    ({ p, a } = info[nr][nc]);
                } else {
                    ({ p, a } = dfs(nr, nc));
                }

                info[r][c].p = info[r][c].p || p;
                info[r][c].a = info[r][c].a || a;
            }
        }

        return {
            p: info[r][c].p,
            a: info[r][c].a
        }
    }

    // 각 cell 순회 및 결과 계산
    const result = [];

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const { p, a } = dfs(r, c);
            if (p && a) {
                result.push([r, c]);
            }
        }
    }

    return result;
};

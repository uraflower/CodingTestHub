const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const rgb = input.map((line) => [...line]);

solution();

function solution() {
  let nonBlindCnt = 0;
  let blindCnt = 0;
  const nonBlindVisited = createVisited();
  const blindVisited = createVisited();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (nonBlindVisited[i][j] !== 0) {
        dfs(i, j, nonBlindVisited, rgb[i][j]);
        nonBlindCnt++;
      }

      if (blindVisited[i][j] !== 0) {
        if (rgb[i][j] === 'R' || rgb[i][j] === 'G') {
          dfs(i, j, blindVisited, 'R', 'G');
        } else {
          dfs(i, j, blindVisited, 'B');
        }
        blindCnt++;
      }
    }
  }

  console.log(nonBlindCnt, blindCnt);
}

function createVisited() {
  return Array.from({ length: n }).map(() => Array.from({ length: n }).fill(1));
}

function dfs(r, c, visited, ...target) {
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const stack = [[r, c]];

  visited[r][c] = 0;

  while (stack.length > 0) {
    const [r, c] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];

      if (
        isValidPosition(nr, nc) &&
        visited[nr][nc] !== 0 &&
        (rgb[nr][nc] === target[0] || rgb[nr][nc] === target[1])
      ) {
        stack.push([nr, nc]);
        visited[nr][nc] = 0;
      }
    }
  }
}

function isValidPosition(r, c) {
  return 0 <= r && r < n && 0 <= c && c < n;
}

const fs = require('fs');
const [size, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, M] = size.split(' ');
const maze = lines.map((line) => [...line].map(Number));
const queue = [[0, 0]]; // 방문 예정 위치 담기
solution();

function solution() {
  const dr = [1, -1, 0, 0];
  const dc = [0, 0, 1, -1];

  while (queue.length > 0) {
    let [r, c] = queue.shift();

    if (maze[r][c] === 0) continue;
    if (r === N - 1 && c === M - 1) break;

    const currentValue = maze[r][c];
    maze[r][c] = 0; // check visited

    for (let i = 0; i < 4; i++) {
      nr = r + dr[i];
      nc = c + dc[i];
      update(nr, nc, currentValue);
    }
  }

  console.log(maze[N - 1][M - 1]);
}

function update(nr, nc, curVal) {
  if (isInvalidPosition(nr, nc) || maze[nr][nc] === 0) return;

  queue.push([nr, nc]);
  maze[nr][nc] = curVal + 1;
}

function isInvalidPosition(r, c) {
  return r < 0 || r >= N || c < 0 || c >= M;
}

const fs = require('fs');
const [V, E, ...edges] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const adjArr = Array.from({ length: V + 1 }).map(() => []);
const visited = new Set();
solution();

function solution() {
  initialize();
  bfs();
  console.log(visited.size - 1);
}

function initialize() {
  for (const edge of edges) {
    const [start, end] = edge.split(' ').map(Number);
    adjArr[start].push(end);
    adjArr[end].push(start);
  }
}

function bfs() {
  const queue = [1];

  while (queue.length > 0) {
    const cur = queue.shift();
    visited.add(cur);

    adjArr[cur].forEach((next) => {
      if (!visited.has(next)) {
        queue.push(next);
        visited.add(next);
      }
    });
  }
}

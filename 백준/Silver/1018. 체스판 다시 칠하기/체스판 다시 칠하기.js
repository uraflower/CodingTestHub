const fs = require('fs');
const [RC, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [R, C] = RC.split(' ').map(Number);
const board = lines.map((line) => [...line]);
const chess = [
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
  ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'],
  ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'],
];

solution();

function solution() {
  let min = Number.MAX_SAFE_INTEGER;
  for (let startR = 0; startR < R - 7; startR++) {
    for (let startC = 0; startC < C - 7; startC++) {
      const cnt = countDifferent(startR, startC);
      min = Math.min(min, cnt, 64 - cnt);
    }
  }
  console.log(min);
}

function countDifferent(startR, startC) {
  let cnt = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      if (board[r + startR][c + startC] !== chess[r][c]) cnt++;
    }
  }
  return cnt;
}

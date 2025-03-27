const fs = require('fs');
const [n, m] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const table = Array.from({ length: n }).map(() => Array.from({ length: n }));
const direction = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
]; // 상 우 하 좌
let directionPointer = 0;
let number = 1; // 채울 숫자

let r = Math.floor(n / 2);
let c = Math.floor(n / 2);
table[r][c] = number++;

let mPosition = [r, c];

for (let jump = 1; jump <= n; jump++) {
  for (let count = 0; count < 2; count++) {
    directionPointer %= 4;
    for (let i = 0; i < jump; i++) {
      const [dr, dc] = direction[directionPointer];
      r = r + dr;
      c = c + dc;

      if (r < 0) break;
      if (number === m) mPosition = [r, c];

      table[r][c] = number++;
    }
    directionPointer++;
  }
}

console.log(table.map((line) => line.join(' ')).join('\n'));
console.log(mPosition.map((position) => position + 1).join(' '));

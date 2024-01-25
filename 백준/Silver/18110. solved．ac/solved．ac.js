const fs = require('fs');
const [n, ...difficulty] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

console.log(solution());

function solution() {
  if (n === 0) return 0;

  const exceptCnt = Math.round(n * 0.15);
  const sum = difficulty
    .sort((a, b) => Number(a) - Number(b))
    .slice(exceptCnt, n - exceptCnt)
    .reduce((sum, num) => sum + num, 0);
  const average = sum / (n - exceptCnt * 2);
  return Math.round(average);
}
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input.shift());
const x = Number(input.pop());
const numbers = input
  .shift()
  .split(' ')
  .map(Number)
  .sort((a, b) => Number(a) - Number(b));

solution(n, x, numbers);

function solution(n, x, numbers) {
  let cnt = 0;

  let l = 0;
  let r = numbers.length - 1;

  // 1 2 3 5 7 9 10 11 12
  while (l < r) {
    if (numbers[l] + numbers[r] === x) {
      cnt++;
      l++;
      r--;
      continue;
    }

    numbers[l] + numbers[r] < x ? l++ : r--;
  }

  console.log(cnt);
}

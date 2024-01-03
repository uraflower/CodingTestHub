const fs = require('fs');
const [a, b, c] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const multiplied = Array.from((a * b * c).toString());

for (let i = 0; i <= 9; i++) {
  const cnt = multiplied.filter((num) => num === i.toString()).length;
  console.log(cnt);
}

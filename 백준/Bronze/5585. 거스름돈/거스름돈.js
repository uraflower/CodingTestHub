const fs = require('fs');
const price = Number(fs.readFileSync('dev/stdin').toString().trim());

let rest = 1000 - price;
const changes = [500, 100, 50, 10, 5, 1];

const cnt = changes.reduce((cnt, change) => {
  cnt += Math.floor(rest / change);
  rest %= change;
  return cnt;
}, 0);

console.log(cnt);

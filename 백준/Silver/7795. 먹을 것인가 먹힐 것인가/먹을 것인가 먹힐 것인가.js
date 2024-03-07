const fs = require('fs');
const [T, ...testCases] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number));

for (let t = 0; t < T; t++) {
  const As = testCases[t * 3 + 1];
  const Bs = testCases[t * 3 + 2].sort((a, b) => Number(a) - Number(b));
  const memo = {};

  const sum = As.reduce((sum, A) => {
    if (memo[A] === undefined) {
      const count = Bs.findIndex((B) => A <= B);
      memo[A] = count === -1 ? Bs.length : count;
    }
    return sum + memo[A];
  }, 0);

  console.log(sum);
}

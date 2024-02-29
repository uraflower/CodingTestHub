const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString().trim());

const result = Array.from({ length: n });

result.forEach((_, i) => {
  if (i === 0) result[i] = 1;
  else if (i === 1) result[i] = 2;
  else result[i] = (result[i - 1] + result[i - 2]) % 10007;
});

console.log(result[n-1]);

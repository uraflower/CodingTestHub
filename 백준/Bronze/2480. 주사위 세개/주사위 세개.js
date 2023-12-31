const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.on('line', function (line) {
  const numbers = line.split(' ').map(Number);
  readline.close();
  solution(numbers);
});

function solution(numbers) {
  const numWithCnt = numbers.reduce((cnt, num) => {
    cnt[num] = Object.hasOwn(cnt, num) ? cnt[num] + 1 : 1;
    return cnt;
  }, {});

  let eye = 0;
  let max = 0;
  for (let [num, cnt] of Object.entries(numWithCnt)) {
    if (cnt > max || (cnt === max && eye < num)) {
      eye = num;
      max = cnt;
    }
  }

  console.log(calcWinningPrice(eye, max));
}

function calcWinningPrice(eye, max) {
  const WINNING_PRICE = [
    [0, 100],
    [0, 100],
    [1000, 100],
    [10000, 1000],
  ];

  const [ADDITION, MULTIPLIER] = WINNING_PRICE[max];
  return ADDITION + eye * MULTIPLIER;
}

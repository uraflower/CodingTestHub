const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T * 3; i += 3) {
  const functions = input[i];
  const array = parse(input[i + 2]);

  let isErrorOccurred = false;
  let cntR = 0;

  for (let name of functions) {
    if (name === 'R') {
      cntR++;
    } else {
      if (array.length === 0) {
        isErrorOccurred = true;
        break;
      }
      isEven(cntR) ? array.shift() : array.pop();
    }
  }

  // 출력
  if (isErrorOccurred) {
    console.log('error');
  } else {
    if (!isEven(cntR)) {
      array.reverse();
    }
    console.log(`[${array.join(',')}]`);
  }
}

function parse(string) {
  return string
    .substring(1, string.length - 1)
    .split(',')
    .filter((num) => num !== '');
}

function isEven(num) {
  return num % 2 === 0;
}

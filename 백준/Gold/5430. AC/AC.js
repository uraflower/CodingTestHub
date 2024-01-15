const fs = require('fs');
const [T, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const result = [];
solution();

function solution() {
  for (let i = 0; i < Number(T); i++) {
    const functions = input[3 * i];
    const array = parse(input[3 * i + 2]);

    executeTestCase(functions, array);
  }
  console.log(result.join('\n'));
}

function executeTestCase(functions, array) {
  let isReversed = false;

  for (let name of functions) {
    if (name === 'R') {
      isReversed = !isReversed;
      continue;
    }

    // case of name === 'D'
    if (array.length === 0) {
      result.push('error');
      return;
    }
    isReversed ? array.pop() : array.shift();
  }

  if (isReversed) array.reverse();
  result.push(`[${array.join(',')}]`);
}

function parse(string) {
  return string
    .substring(1, string.length - 1)
    .split(',')
    .filter((num) => num !== '');
}

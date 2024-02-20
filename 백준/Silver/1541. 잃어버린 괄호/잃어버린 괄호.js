const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

function calc() {
  let minus = false;
  let number = '';
  let sum = 0;

  input += '+';

  for (let char of input) {
    if (char !== '-' && char !== '+') {
      number += char;
      continue;
    }

    sum += minus ? -number : +number;
    number = '';
    if (char === '-') minus = true;
  }

  console.log(sum);
}

calc();

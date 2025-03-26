const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num1 = Number(input[0]);
const num2 = input[1];

const answer = [num1 * num2[2], num1 * num2[1], num1 * num2[0], num1 * num2];
console.log(answer.join('\n'));

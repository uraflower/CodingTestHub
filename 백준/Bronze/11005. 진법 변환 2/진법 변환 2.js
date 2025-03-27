const fs = require('fs');
const [num, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
console.log(num.toString(b).toUpperCase());
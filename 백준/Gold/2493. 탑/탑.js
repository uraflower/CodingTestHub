const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input[0]);
const tops = input[1].split(' ').map((top, i) => {
  return {
    top: Number(top),
    index: i + 1,
  };
});

const receptions = []; // 수신 가능한 탑 스택
const indexes = []; // 수신한 탑의 번호 배열

tops.forEach((current) => {
  while (receptions.length > 0) {
    const closest = receptions[receptions.length - 1];
    if (closest.top > current.top) {
      indexes.push(closest.index);
      break;
    } else {
      receptions.pop();
    }
  }

  if (receptions.length === 0) {
    indexes.push(0);
  }

  receptions.push({
    top: current.top,
    index: current.index,
  });
});

console.log(indexes.join(' '));

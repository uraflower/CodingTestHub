const fs = require('fs');
const inputs = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [N, d, k, couponSushi] = inputs.shift().split(' ').map(Number);
const sushes = inputs.map(Number);

// k개만큼 슬라이스해서 Set에 넣고 size를 잼
// max보다 size가 크면 max 갱신
// 이 때 Set이 쿠폰 번호와 같은 스시를 가지고 있지 않으면 max + 1
// N번 반복

let start = 0;
let end = k - 1;
let max = 0; // answer
const counts = Array.from({ length: d + 1 }).fill(0);

// counts 초기화. 처음부터 k-1번째 스시까지를 순회하며 counts 업데이트
for (let i = start; i < end; i++) {
  counts[sushes[i]]++;
}

while (start < N) {
  counts[sushes[end]]++;

  const selected = new Set(
    counts.reduce((selected, count, idx) => {
      if (count > 0) selected.push(idx);
      return selected;
    }, []),
  );

  if (max <= selected.size) {
    max = selected.size;
    if (!selected.has(couponSushi)) max = max + 1;
  }

  counts[sushes[start]]--;
  start = start + 1;
  end = (end + 1) % N;
}

console.log(max);

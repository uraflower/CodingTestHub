const fs = require('fs');
const [n, m] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const answer = [];

solution(
  new Set(),
  Array.from({ length: n }).map((_, i) => i + 1),
  1,
);
console.log(answer.join('\n'));

function solution(selected, nodes, depth) {
  if (depth === m) {
    for (let node of nodes) {
      answer.push([...selected, node].join(' '));
    }
    return;
  }

  for (let node of nodes) {
    if (selected.has(node)) continue;

    const copiedNodes = new Set([...nodes]);
    copiedNodes.delete(node);
    solution(new Set([...selected, node]), copiedNodes, depth + 1);
  }
}

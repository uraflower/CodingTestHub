const fs = require('fs');
const [n, ...input] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const path = input.map((row) => row.split(' ')); // matrix
const adjList = input.map((row) => {
  return row
    .split(' ')
    .map(Number)
    .reduce((indexes, isPathExist, idx) => {
      if (isPathExist) indexes.push(idx);
      return indexes;
    }, []);
});

for (let i = 0; i < n; i++) {
  const queue = [...adjList[i]];
  const visited = new Set(queue);

  while (queue.length) {
    const currentNode = queue.shift();

    adjList[currentNode].forEach((node) => {
      if (!visited.has(node)) {
        queue.push(node);
        path[i][node] = 1;
        visited.add(node);
      }
    });
  }
}

console.log(path.map((row) => row.join(' ')).join('\n'));

class Queue {
  length = 0;

  constructor(node = null) {
    this.head = node;
    this.tail = node;
  }

  createNode(data) {
    const node = {
      prev: null,
      next: null,
      data: data,
    };
    return node;
  }

  push(data) {
    const node = this.createNode(data);
    if (this.head === null) {
      this.head = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  shift() {
    if (this.head === null) return;

    const oldHead = this.head;
    this.head = oldHead.next; // assign new head
    oldHead.next = null;
    if (this.head) this.head.prev = null;

    this.length--;
    return oldHead.data;
  }
}

function createBoxes() {
  lines.forEach((line, index) => {
    const floor = Math.floor(index / N);
    const row = line.split(' ').map(Number);
    boxes[floor].push(row);
  });
}

function checkStatus() {
  boxes.forEach((box, h) => {
    box.forEach((row, r) => {
      row.forEach((tomato, c) => {
        if (tomato === 1) queue.push([h, r, c]);
        else if (tomato === 0) unripeCnt++;
      });
    });
  });
}

function bfs() {
  const dh = [-1, 1, 0, 0, 0, 0];
  const dr = [0, 0, -1, 1, 0, 0];
  const dc = [0, 0, 0, 0, -1, 1];

  while (queue.length > 0) {
    const [oh, or, oc] = queue.shift();
    const day = boxes[oh][or][oc];
    if (day > maxDay) {
      maxDay = day;
    }

    for (let i = 0; i < 6; i++) {
      const h = oh + dh[i];
      const r = or + dr[i];
      const c = oc + dc[i];

      if (isValidPosition(h, r, c) && boxes[h][r][c] === 0) {
        unripeCnt--;
        boxes[h][r][c] = day + 1;
        queue.push([h, r, c]);
      }
    }
  }
}

function isValidPosition(h, r, c) {
  return 0 <= h && h < H && 0 <= r && r < N && 0 <= c && c < M;
}

const fs = require('fs');
const [boxSize, ...lines] = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n');

const [M, N, H] = boxSize.split(' ').map(Number);
const boxes = Array.from({ length: H }).map(() => []);
const queue = new Queue();
let unripeCnt = 0;
let maxDay = 0;

createBoxes();
checkStatus();
bfs();
unripeCnt > 0 ? console.log(-1) : console.log(maxDay - 1);

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    let r = 0;
    let c = 0;
    const queue = [[r, c]];
    let paths = 0;

    while (queue.length) {
        const [x, y] = queue.shift();

        if (x === m - 1 && y === n - 1) {
            paths += 1;
            continue;
        }

        if (0 <= x + 1 && x + 1 < m) {
            queue.push([x + 1, y]);
        }
        if (0 <= y + 1 && y + 1 < n) {
            queue.push([x, y + 1]);
        }
    }

    return paths;
};
/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function (n) {
    const arr = [];

    for (let i = 0; i < n + 1; i++) {
        const bin = i.toString(2);

        let num = 0;
        for (let char of bin) {
            if (char === '1') num++;
        }

        arr.push(num);
    }

    return arr;
};
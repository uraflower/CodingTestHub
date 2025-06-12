/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    intervals.sort((a, b) => Number(a[0]) - Number(b[0]));
    const result = [];

    for (const current of intervals) {
        const last = result[result.length - 1];

        if (last && current[0] <= last[1]) {
            result[result.length - 1] = [Math.min(current[0], last[0]), Math.max(current[1], last[1])];
        } else {
            result.push(current);
        }
    }

    return result;
};
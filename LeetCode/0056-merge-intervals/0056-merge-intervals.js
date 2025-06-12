/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
    intervals.sort((a, b) => Number(a[0]) - Number(b[0]));
    const result = [];

    for (const [s1, e1] of intervals) {
        if (result.length > 0) {
            const [s2, e2] = result[result.length - 1];
            if (s1 <= e2) {
                result[result.length - 1] = [Math.min(s1, s2), Math.max(e1, e2)];
            } else {
                result.push([s1, e1]);
            }
        } else {
            result.push([s1, e1]);
        }
    }

    return result;
};
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const w = right - left;
        const h = Math.min(height[left], height[right]);

        max = Math.max(max, w * h);

        if (height[left] <= height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
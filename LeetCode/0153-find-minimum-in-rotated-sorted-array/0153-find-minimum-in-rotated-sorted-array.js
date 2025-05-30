

const findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    let mid;

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return nums[left];
}
// 듀얼 힙으로 풀이
// 최소힙, 최대힙 두 개를 두고 나눠서 add 이 때 size 차이는 1 이하여야 함
// ex. 1 2 3 4 5 6 => 최대 힙에 1 2 3, 최소 힙에 4 5 6 => (3 + 4) / 2
// ex. 2 3 4 => 최대 힙에 2 3, 최소 힙에 4 => 3

class MedianFinder {
    constructor() {
        this.nums = [];
    }

    /** 
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        const insert = this.#binarySearch(num);
        this.nums.splice(insert, 0, num);
    }

    #binarySearch(num) {
        let left = 0;
        let right = this.nums.length;
        
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);

            if (num < this.nums[mid]) {
                right = mid - 1;
            } else if (this.nums[mid] < num) {
                left = mid + 1;
            } else {
                return mid;
            }
        }

        return left;
    }

    /**
     * @return {number}
     */
    findMedian() {
        const len = this.nums.length;
        const midIndex = Math.floor(len / 2);
        
        if (len % 2 === 0) {
            return (this.nums[midIndex - 1] + this.nums[midIndex]) / 2;
        } else {
            return this.nums[midIndex];
        }
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
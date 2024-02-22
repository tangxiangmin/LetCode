/**
 * @param {number} k
 * @param {number[]} nums
 */
// 与703相同， 可以对数组排序，然后再add的时候插入位置，也可以使用优先队列
// letcode 内置了https://www.npmjs.com/package/@datastructures-js/priority-queue
var KthLargest = function (k, nums) {
    this.k = k
    this.pq = PriorityQueue.fromArray(nums, (a, b) => b - a);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    this.pq.enqueue(val)
    return this.pq.toArray()[this.k - 1]

};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
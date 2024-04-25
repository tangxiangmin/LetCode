const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

var SmallestInfiniteSet = function () {
    this.removed = {}
    this.cnt = 0
    this.addQueue = new MinPriorityQueue()
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function () {
    const addQueue = this.addQueue
    if (!addQueue.isEmpty()) {
        const { element } = addQueue.dequeue()
        this.removed[element]--
        return element
    }
    this.cnt++
    this.removed[this.cnt] = 1
    return this.cnt
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function (num) {
    if (!this.removed[num]) return
    this.removed[num] = 0
    this.addQueue.enqueue(num, num)

};

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number} n
 */
var SeatManager = function (n) {
    this.queue = new MinPriorityQueue()
    for (let i = 1; i <= n; ++i) {
        this.queue.enqueue(i, i)
    }
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
    const { element } = this.queue.dequeue()
    return element
};

/** 
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
    this.queue.enqueue(seatNumber, seatNumber)
};

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
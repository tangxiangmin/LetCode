/**
 * https://leetcode-cn.com/explore/learn/card/queue-stack/216/queue-first-in-first-out-data-structure/865/
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.len = k;
    this.head = -1; // 指向头结点
    this.tail = 0; // 指向下一个有空位的索引值
    this.data = [];
    for (var i = 0; i < k; ++i) {
        this.data[i] = null;
    }
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (!this.isFull()) {
        if (this.head === -1) {
            this.head = 0;
        }
        this.data[this.tail] = value;

        this.tail++;
        if (this.tail == this.len) {
            this.tail = 0;
        }

        return true;
    }

    return false;
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.isEmpty()) {
        this.data[this.head] = null;
        this.head++;
        if (this.head == this.len) {
            this.head = 0;
        }
        return true;
    }
    return false;
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) {
        return -1;
    }
    return this.data[this.head];
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) {
        return -1;
    }
    let last;
    if (this.tail == 0) {
        last = this.len - 1;
    } else {
        last = this.tail - 1;
    }
    return this.data[last];
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === this.tail && this.data[this.head] === null;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.head === this.tail && this.data[this.head] !== null;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

// var queue = new MyCircularQueue(3);
// console.log(queue.enQueue(1));
// console.log(queue.enQueue(2));
// console.log(queue.enQueue(3));
// console.log(queue);

// queue.enQueue(4);
// console.log(queue.Rear());
// console.log(queue.isFull());
// console.log(queue.deQueue());
// console.log(queue.enQueue(4));
// console.log(queue.Rear());

// var q2 = new MyCircularQueue(6);
// console.log(q2.enQueue(6));
// // console.log(q2)
// console.log(q2.Rear());
// console.log(q2.Rear());
// console.log(q2.deQueue());
// console.log(q2.enQueue(5));
// console.log(q2.Rear());
// console.log(q2.deQueue());
// console.log(q2.Front());
// console.log(q2.deQueue());
// console.log(q2.deQueue());
// console.log(q2.deQueue());

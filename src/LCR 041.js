/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function (size) {
    this.arr = new Array(size)
    this.sum = 0
    this.cnt = 0
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
    if (this.cnt < this.arr.length) {
        this.arr[this.cnt] = val
        this.sum += val
        this.cnt++
    } else {
        this.sum -= this.arr.shift()
        this.sum += val
        this.arr.push(val)
    }
    return this.sum / this.cnt
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.maxSize = maxSize
    this.data = []

};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.data.length < this.maxSize) {
        this.data.push(x)
    }

};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    if (this.data.length) {
        return this.data.pop()
    }
    return -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    const n = Math.min(this.data.length, k)
    for (let i = 0; i < n; ++i) {
        this.data[i] += val
    }

};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
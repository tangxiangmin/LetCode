var MaxQueue = function() {
    this.data = []
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    return this.data.length ? Math.max.apply(null, this.data) : -1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.data.push(value)
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {

    return this.data.length ? this.data.shift() : -1
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
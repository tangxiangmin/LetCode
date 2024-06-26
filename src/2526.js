/**
 * @param {number} value
 * @param {number} k
 */
var DataStream = function (value, k) {
    this.value = value
    this.k = k
    this.cnt = 0
};

/** 
 * @param {number} num
 * @return {boolean}
 */
DataStream.prototype.consec = function (num) {
    if (num === this.value) {
        this.cnt++
    } else {
        this.cnt = 0
    }
    return this.cnt >= this.k
};

/**
 * Your DataStream object will be instantiated and called as such:
 * var obj = new DataStream(value, k)
 * var param_1 = obj.consec(num)
 */
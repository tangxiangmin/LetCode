// 设计一个栈，支持pop、push等方法，且需要以常量时间返回最小值
// 思路：push时维护一个最小值即可,需要注意pop是否会将该值移除


/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.data = [];
    // this.min = Number.MAX_VALUE;
    // this.minIndex = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    // if (x < this.min){
    //     this.min = x;
    //     this.minIndex = this.data.length;
    // }
    this.data.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    // if (this.minIndex == this.data.length - 1){
        
    // }
    this.data.pop();

};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.data[this.data.length-1];

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    // return this.min;
    return Math.min.apply(null, this.data);
};
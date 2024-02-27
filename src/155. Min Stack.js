// 设计一个栈，支持pop、push等方法，且需要以常量时间返回最小值
// 思路：push时维护一个最小值即可,需要注意pop是否会将该值移除


/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.x_stack = [];
    this.min_stack = [Infinity];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.x_stack.push(x);
    this.min_stack.push(Math.min(this.min_stack[this.min_stack.length - 1], x));
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.x_stack.pop();
    this.min_stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.x_stack[this.x_stack.length - 1];

};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.min_stack[this.min_stack.length - 1];
};
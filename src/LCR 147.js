/**
 * initialize your data structure here.
 */
var MinStack = function () {
    this.arr = []
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.arr.push(x)

    if (!this.stack.length || this.stack[this.stack.length - 1] >= x) {
        this.stack.push(x)
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    const x = this.arr.pop()
    if (x === this.stack[this.stack.length - 1]) {
        this.stack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    return this.arr[this.arr.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.stack[this.stack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const { runClass } = require('../libs/klass')
var actions = ["MinStack", "push", "push", "push", "getMin", "pop", "top", "getMin"], params = [[], [-2], [2], [-3], [], [], [], []]
runClass(MinStack, actions, params)

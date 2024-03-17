
var SortedStack = function () {
    this.data = [] // 递减栈
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function (val) {
    const { data } = this
    if (!data.length) {
        data.push(val)
        return
    }
    // 使用递减栈，栈顶保存最小的元素
    const tmp = []
    while (data.length && data[data.length - 1] < val) {
        tmp.push(data.pop())
    }
    data.push(val)

    while (tmp.length) {
        data.push(tmp.pop())
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function () {
    this.data.pop()
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function () {
    if (this.isEmpty()) return -1
    return this.data[this.data.length - 1]
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function () {
    return this.data.length === 0
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */
/**
 * @param {number} cap
 */
var StackOfPlates = function (cap) {
    this.cap = cap
    this.stacks = []
};

/** 
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function (val) {
    if (this.cap === 0) return
    // 找到前面未填完的stack
    // for (let i = 0; i < this.stacks.length; ++i) {
    //     const cur = this.stacks[i]
    //     if (cur.length < this.cap) {
    //         cur.push(val)
    //         return
    //     }
    // }
    let cur = this.stacks[this.stacks.length - 1]
    if (!cur || cur.length === this.cap) {
        cur = []
        this.stacks.push(cur)
    }
    cur.push(val)
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function () {
    let cur = this.stacks[this.stacks.length - 1]
    if (cur) {
        let val = cur.pop()
        if (cur.length === 0) {
            this.stacks.pop()
        }
        return val
    } else {
        return -1
    }
};

/** 
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function (index) {
    let cur = this.stacks[index]
    if (!cur) return -1
    let val = cur.pop()
    if (cur.length === 0) {
        let index = this.stacks.indexOf(cur)
        this.stacks.splice(index, 1)
    }
    return val

};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */
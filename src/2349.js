
var NumberContainers = function () {
    this.bucket = {}
    this.queues = {}

};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function (index, number) {
    const oldVal = this.bucket[index]
    if (oldVal === number) return
    // 旧节点删除
    if (oldVal) {
        const list = this.queues[oldVal]
        const idx = list.indexOf(index)
        list.splice(idx, 1)
    }

    this.bucket[index] = number
    if (!this.queues[number]) {
        this.queues[number] = []
    }

    const arr = this.queues[number]
    let l = 0
    let r = arr.length
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (arr[mid] >= index) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    arr.splice(l, 0, index)
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function (number) {
    const arr = this.queues[number]
    if (!arr || !arr.length) return -1
    return arr[0]
};

/**
 * Your NumberContainers object will be instantiated and called as such:
 * var obj = new NumberContainers()
 * obj.change(index,number)
 * var param_2 = obj.find(number)
 */
// BF算法 ，空间复杂度会超时

// /**
//  * @param {number} length
//  */
// var SnapshotArray = function (length) {
//     this.arr = new Array(length).fill(0)
//     this.id = -1
//     this.record = {}
// };

// /** 
//  * @param {number} index 
//  * @param {number} val
//  * @return {void}
//  */
// SnapshotArray.prototype.set = function (index, val) {

//     this.arr[index] = val
// };

// /**
//  * @return {number}
//  */
// SnapshotArray.prototype.snap = function () {
//     this.id++
//     this.record[this.id] = [...this.arr]
//     return this.id
// };

// /** 
//  * @param {number} index 
//  * @param {number} snap_id
//  * @return {number}
//  */
// SnapshotArray.prototype.get = function (index, snap_id) {
//     const record = this.record[snap_id]
//     return record[index]
// };

// 看起来也可以用类似于前缀树的思想
/**
 * @param {number} length
 */
var SnapshotArray = function (length) {
    this.id = 0
    this.arr = new Array(length).fill(0).map(() => new Array(1).fill({ val: 0, id: this.id }))
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function (index, val) {
    const record = this.arr[index]
    const last = record[record.length - 1]
    if (last.id === this.id) {
        last.val = val
    } else {
        record.push({ val, id: this.id })
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function () {
    let val = this.id
    this.id++
    return val
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function (index, snap_id) {
    const record = this.arr[index]
    let l = 0
    let r = record.length - 1
    // 找到最后一个id<=snap_id的元素
    while (l <= r) {
        const mid = (l + r) >> 1
        const { id, val } = record[mid]
        if (id === snap_id) {
            return val
        } else if (id > snap_id) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }

    return record[r].val
};


/**
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
const { runClass } = require('../libs/klass')
var actions = ["SnapshotArray", "set", "set", "set", "snap", "get", "snap"], params = [[1], [0, 4], [0, 16], [0, 13], [], [0, 0], []]
var actions = ["SnapshotArray", "set", "snap", "set", "get"], params = [[3], [0, 5], [], [0, 6], [0, 0]]

runClass(SnapshotArray, actions, params)



function leftBound(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = (l + r) >> 1
        if (nums[mid] >= target) {
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return l
}
function rightBound(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const mid = (l + r) >> 1
        if (nums[mid] <= target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return r
}

// 这种会超时
// /**
//  * @param {number[]} arr
//  */
// var RangeFreqQuery = function (arr) {
//     this.arr = arr
// };

// /** 
//  * @param {number} left 
//  * @param {number} right 
//  * @param {number} value
//  * @return {number}
//  */
// RangeFreqQuery.prototype.query = function (left, right, value) {
//     const list = this.arr.slice(left, right + 1)
//     list.sort((a, b) => a - b)
//     const l = leftBound(list, value)
//     const r = rightBound(list, value)
//     if (list[l] !== value && list[r] !== value) {
//         return 0
//     }
//     return r - l + 1
// };

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
    const map = {}
    const n = arr.length
    for (let i = 0; i < n; ++i) {
        const num = arr[i]
        if (!map[num]) {
            map[num] = []
        }
        map[num].push(i)
    }
    this.map = map
};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
    const list = this.map[value]
    if (!list) return 0
    const l = leftBound(list, left) // 找到list中第一个大于等于left的数
    const r = rightBound(list, right) // 找到list中最后一个小于等于left的数

    return r - l + 1
};

/**
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

const { runClass } = require('../libs/klass')

var actions = ['RangeFreqQuery', 'query', 'query']
var params = [[[12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]], [1, 2, 4], [0, 11, 33]]
runClass(RangeFreqQuery, actions, params)
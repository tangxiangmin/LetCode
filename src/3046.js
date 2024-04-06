/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function (nums) {
    const arr = new Array(101).fill(0)
    for (const num of nums) {
        arr[num]++
    }
    for (const v of arr) {
        if (v > 2) return false
    }
    return true
};
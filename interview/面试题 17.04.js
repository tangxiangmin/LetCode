/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    const n = nums.length
    const arr = new Array(n + 1).fill(0)
    for (const num of nums) {
        arr[num] = 1
    }
    for (let i = 0; i < n; ++i) {
        if (arr[i] === 0) return i
    }
    return n
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    const n = 101
    const arr = new Array(n).fill(0)
    for (const num of nums) {
        arr[num]++
    }
    const max = Math.max(...arr)

    return arr.filter(row => row === max).length * max

};
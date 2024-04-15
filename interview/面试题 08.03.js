/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function (nums) {

    const n = nums.length
    for (let i = 0; i < n; ++i) {
        if (nums[i] === i) return i
    }
    return -1
};
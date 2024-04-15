/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumPrimeDifference = function (nums) {
    const list = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

    const n = nums.length
    let i = 0
    for (; i < n; ++i) {
        if (list.includes(nums[i])) {
            break
        }
    }
    let j = n - 1
    for (; j >= 0; --j) {
        if (list.includes(nums[j])) {
            break
        }
    }
    return j - i
};
var nums = [4, 2, 9, 5, 3]
nums = [4,8,2,8]
var ans = maximumPrimeDifference(nums)
console.log(ans)
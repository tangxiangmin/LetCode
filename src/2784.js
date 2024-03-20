/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function (nums) {
    const len = nums.length
    nums.sort((a, b) => a - b)

    const n = nums[len - 1]
    if (n !== nums[len - 2]) return false
    if (len !== n + 1) return false

    for (let i = 0; i < len - 2; ++i) {
        if (nums[i] !== i + 1) {
            return false
        }
    }
    return true
};
var nums = [1, 3, 3, 2]
nums = [2, 1, 3]
nums = [1, 1]
nums = [3, 4, 4, 1, 2, 1]
var ans = isGood(nums)
console.log(ans)
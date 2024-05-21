/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function (nums) {
    const n = nums.length
    for (let i = 0; i < n - 1; ++i) {
        if (nums[i] % 2 === nums[i + 1] % 2) {
            return false
        }
    }
    return true
};
var nums = [1]
nums = [2,1,4]
nums = [4,3,1,6]
var ans = isArraySpecial(nums)
console.log(ans)
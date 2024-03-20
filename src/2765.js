/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    const n = nums.length
    let i = 0
    let ans = -1
    while (i < n) {
        let diff = 1
        let start = i
        let flag = false
        while (nums[i + 1] - nums[i] === diff) {
            diff *= -1
            i++
            flag = true
        }
        if (flag) {
            ans = Math.max(ans, i - start + 1)
        }
        if (!flag) {
            i++
        }
    }
    return ans
};
var nums = [2, 3, 4, 3, 4]
// nums = [4, 5, 6]
nums = [21, 9, 5]
var ans = alternatingSubarray(nums)
console.log(ans)
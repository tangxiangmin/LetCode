/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var numSubarrayBoundedMax = function (nums, left, right) {
    const n = nums.length

    let a = -1 // 在[left,right]区间的数字
    let b = -1 // 大于right的数字
    let ans = 0

    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        if (num >= left && num <= right) {
            a = i
        } else if (num > right) {
            b = i
            a = -1
        }
        if (a !== -1) {
            ans += a - b
        }
    }

    return ans
};
var nums = [2, 1, 4, 3], left = 2, right = 3
var ans = numSubarrayBoundedMax(nums, left, right)
console.log(ans)
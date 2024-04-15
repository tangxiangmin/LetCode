/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 先BF试一下
var maximumBeauty = function (nums, k) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        const list = [nums[i] - k, nums[i], nums[i] + k]
        for (const v of list) {
            let cnt = 0
            for (const num of nums) {
                if (Math.abs(num - v) <= k) {
                    cnt++
                }
            }
            ans = Math.max(cnt, ans)
        }
    }
    return ans
};
// 由于选择的是子序列，且元素相等，因此顺序没关系，可以排序，题目变成了：找最长的连续子数组，其最大值减最小值不超过 2k
var maximumBeauty = function (nums, k) {
    nums.sort((a, b) => a - b)
    const n = nums.length
    let l = 0
    let r = 0
    let ans = 0
    while (r < n) {
        while (nums[r] - nums[l] > 2 * k) {
            l++
        }
        ans = Math.max(ans, r - l + 1)
        r++
    }
    return ans
}
var nums = [49, 26], k = 12
var ans = maximumBeauty(nums, k)
console.log(ans)
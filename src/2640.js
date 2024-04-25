/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findPrefixScore = function (nums) {
    let max = 0

    const n = nums.length
    const ans = []
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        max = Math.max(num, max)

        const score = max + num
        ans[i] = i == 0 ? score : ans[i - 1] + score
    }
    return ans
};
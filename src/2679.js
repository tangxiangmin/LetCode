/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
    const m = nums.length
    const n = nums[0].length
    for (const row of nums) {
        row.sort((a, b) => b - a)
    }

    let ans = 0
    for (let i = 0; i < n; ++i) {
        let max = 0
        for (let j = 0; j < m; ++j) {
            max = Math.max(max, nums[j][i])
        }
        ans += max
    }
    return ans
};
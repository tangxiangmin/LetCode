/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 肯定会超时的BF
var countSmaller = function (nums) {
    const n = nums.length
    const ans = []
    for (let i = 0; i < n; ++i) {
        let cnt = 0
        for (let j = i + 1; j < n; ++j) {
            if (nums[j] < nums[i]) {
                cnt++
            }
        }
        ans[i] = cnt
    }
    return ans
};
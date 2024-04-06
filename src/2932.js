/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    const n = nums.length
    let ans = 0
    for (let i = 0; i < n; ++i) {
        const x = nums[i]
        for (let j = 0; j < n; ++j) {
            const y = nums[j]
            if (Math.abs(x - y) <= Math.min(x, y)) {
                ans = Math.max(ans, x ^ y)
            }
        }
    }
    return ans
};
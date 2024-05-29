/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 枚举nums中的每一个数字，判断其作为开头时可以获得的最大字符串
// 不知道为啥老是会超时
var lengthOfLongestSubsequence = function (nums, target) {

    const n = nums.length
    const cache = new Map()
    const ans = dfs(0, target)
    return ans === -Infinity ? -1 : ans

    function dfs(i, target) {
        const key = `${i},${target}`
        if (cache.has(key)) {
            return cache.get(key)
        }
        if (target === 0) return 0
        if (target < 0) return -Infinity
        if (i === n) return -Infinity

        const a = dfs(i + 1, target - nums[i])
        const b = dfs(i + 1, target)
        const ans = Math.max(a + 1, b)

        cache.set(key, ans)
        return cache[key] = ans
    }
};

// 改成递推
var lengthOfLongestSubsequence = function (nums, target) {
    const n = nums.length
    const f = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(-Infinity))
    f[0][0] = 0
    for (let i = 0; i < n; ++i) {
        const x = nums[i]
        for (let c = 0; c <= target; ++c) {
            if (c < x) {
                f[i + 1][c] = f[i][c]
            } else {
                f[i + 1][c] = Math.max(f[i][c], f[i][c - x] + 1)
            }
        }
    }
    if (f[n][target] <= 0) {
        return -1
    }
    return f[n][target]
}


var nums = [1, 2, 3, 4, 5], target = 9
nums = [4, 1, 3, 2, 1, 5], target = 7
nums = [1, 1, 5, 4, 5], target = 3
// nums = [90, 84, 27, 72, 45, 63, 10, 69, 66, 65, 21, 42, 65, 14, 83, 8, 73, 52, 42, 71, 53, 15, 8, 6, 55, 49, 99, 30, 89, 5, 46, 58, 27, 48, 16, 10, 87, 55, 59, 87, 6, 97, 68, 79, 97, 32, 53, 89, 78, 63, 20, 28, 85, 79, 43, 95, 26, 23, 10, 10, 78, 63, 76, 44, 74, 74, 32, 24, 6, 64, 26, 69, 88, 17, 49, 81, 7, 43, 16, 69, 25, 78, 20, 94, 89, 2, 100, 29], target = 1000
// nums = [1000], target = 1000

// nums = [97, 35, 67, 37, 23, 41, 84, 90, 43, 2, 57, 66, 80, 56, 42, 42, 36, 42, 89, 3, 34, 8, 21, 72, 35, 54, 23, 7, 20, 5, 64, 92, 100, 84, 31, 30, 46, 6, 21, 76, 70, 39, 44, 94, 57, 71, 5, 37, 92, 55, 27, 95, 14, 75, 77, 94, 13, 40, 40, 72, 88, 55, 35, 38, 16, 86, 44, 48, 54, 55, 82, 21, 1, 24, 96, 59, 13, 77, 48, 49, 5, 100, 54, 72, 88, 67, 26, 93, 9, 35, 19, 96, 81, 79, 48, 89, 51, 96, 83, 90], target = 768

var ans = lengthOfLongestSubsequence(nums, target)
console.log(ans)
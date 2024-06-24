/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 题读了半天，要子子序列seq中，对于seq[i],不满足seq[i] != seq[i + 1]的索引值要小于k个
// 卡在了优化时间复杂度这一步，为什么用了缓存还会超时
var maximumLength = function (nums, k) {
    const n = nums.length
    const cache = new Map()

    let max = 0
    const map = {}
    for (let i = 0; i < n; ++i) {
        const num = nums[i]
        // 相同数字的可以不优化
        if (map[num]) continue
        map[num] = 1

        let val = dfs(i + 1, num, k) + 1
        max = Math.max(val, max)
    }
    return max

    // 以prev为初始值，从i开始的好子序列长度
    function dfs(i, prev, cnt) {
        if (cnt < 0) return 0
        if (i === n) return 0

        const key = `${i},${prev},${cnt}`
        if (cache.has(key)) {
            return cache.get(key)
        }

        let ans
        if (nums[i] === prev) {
            // 相等的话则选择当前即可
            ans = dfs(i + 1, prev, cnt) + 1
        } else {
            let a = dfs(i + 1, prev, cnt) // 不选择当前
            let b = cnt > 0 ? dfs(i + 1, nums[i], cnt - 1) + 1 : 0 // 选择当前
            ans = Math.max(a, b)
        }
        cache.set(key, ans)
        return ans
    }
};

// 从后向前，可以进行剪枝，有些边界情况无法处理
// var maximumLength = function (nums, k) {
//     const n = nums.length
//     if (n === 1) return 1

//     const dp = new Array(n).fill(0).map(() => new Array())
//     dp[n - 1] = [1, k]

//     let ans = 0
//     for (let i = n - 2; i >= 0; --i) {
//         dp[i] = [1, k]
//         for (let j = i + 1; j < n; ++j) {
//             const [v, cnt] = dp[j]

//             if (nums[j] === nums[i]) {
//                 if (dp[i][0] < v + 1) {
//                     dp[i] = [v + 1, cnt]
//                 }
//             } else if (cnt > 0) {
//                 if (dp[i][0] < v + 1) {
//                     dp[i] = [v + 1, cnt - 1]
//                 }
//             }
//         }
//         ans = Math.max(dp[i][0], ans)
//     }
//     console.table(dp)
//     return ans
// }



var nums = [1, 2, 1, 1, 3], k = 2
nums = [1, 2, 3, 4, 5, 1], k = 0
nums = [2, 1], k = 1
nums = [2], k = 1
nums = [59, 59, 60, 60, 59, 60], k = 2
var ans = maximumLength(nums, k)
console.log(ans)
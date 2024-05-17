/**
 * @param {number[][]} frame
 * @return {number}
 */
// 记忆搜索
var jewelleryValue = function (frame) {
    const m = frame.length
    const n = frame[0].length
    const cache = {}
    return dfs(0, 0)
    function dfs(i, j) {
        if (i === m || j === n) return 0
        if (i === m - 1 && j === n - 1) return frame[i][j]
        const key = `${i},${j}`
        if (cache[key] !== undefined) return cache[key]
        const ans = Math.max(dfs(i + 1, j), dfs(i, j + 1)) + frame[i][j]
        cache[key] = ans
        return ans
    }
};
// 动态规划，对于最后一个格子，要么从上方，要么从左侧
var jewelleryValue = function (frame) {
    const m = frame.length
    const n = frame[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            dp[i][j] = frame[i][j] + Math.max(i === 0 ? 0 : dp[i - 1][j], j == 0 ? 0 : dp[i][j - 1])
        }
    }
    return dp[m - 1][n - 1]
}

var frame = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
var ans = jewelleryValue(frame)
console.log(ans)
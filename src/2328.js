/**
 * @param {number[][]} matrix
 * @return {number}
 */
// 跟329题很像，从最长路径变成求路径之和
var countPaths = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length

    const mod = 10 ** 9 + 7

    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    let ans = 0
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            ans = (ans + dfs(i, j)) % mod
        }
    }
    return ans % mod

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j == n) return 0

        if (cache[i][j]) return cache[i][j]


        const cur = matrix[i][j]
        let ans = 1
        if (i + 1 < m && cur < matrix[i + 1][j]) {
            ans = (ans + dfs(i + 1, j)) % mod
        }
        if (j + 1 < n && cur < matrix[i][j + 1]) {
            ans = (ans + dfs(i, j + 1)) % mod
        }
        if (i - 1 >= 0 && cur < matrix[i - 1][j]) {
            ans = (ans + dfs(i - 1, j)) % mod
        }
        if (j - 1 >= 0 && cur < matrix[i][j - 1]) {
            ans = (ans + dfs(i, j - 1)) % mod
        }
        return cache[i][j] = ans
    }
};
var grid = [[1, 1], [3, 4]]
grid = [[1], [2]]
var ans = countPaths(grid)
console.log(ans)
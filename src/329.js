/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length

    const cache = new Array(m).fill(0).map(() => new Array(n).fill(0))
    let ans = 1
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            ans = Math.max(ans, dfs(i, j))
        }
    }
    return ans

    function dfs(i, j) {
        if (i < 0 || i === m || j < 0 || j == n) return 0

        if (cache[i][j]) return cache[i][j]


        const cur = matrix[i][j]
        let ans = 1
        if (i + 1 < m && cur < matrix[i + 1][j]) {
            ans = Math.max(ans, dfs(i + 1, j) + 1)
        }
        if (j + 1 < n && cur < matrix[i][j + 1]) {
            ans = Math.max(ans, dfs(i, j + 1) + 1)
        }
        if (i - 1 >= 0 && cur < matrix[i - 1][j]) {
            ans = Math.max(ans, dfs(i - 1, j) + 1)
        }
        if (j - 1 >= 0 && cur < matrix[i][j - 1]) {
            ans = Math.max(ans, dfs(i, j - 1) + 1)
        }
        return cache[i][j] = ans
    }
};
var matrix = [[9, 9, 4], [6, 6, 8], [2, 1, 1]]
var ans = longestIncreasingPath(matrix)
console.log(ans)
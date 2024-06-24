/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
// 二维前缀和
var matrixBlockSum = function (mat, k) {
    const m = mat.length
    const n = mat[0].length

    const prefixSum = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
    for (let i = 1; i <= m; ++i) {
        for (let j = 1; j <= n; ++j) {
            prefixSum[i][j] = mat[i - 1][j - 1] + prefixSum[i - 1][j] + prefixSum[i][j - 1] - prefixSum[i - 1][j - 1]
        }
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            const r1 = Math.max(i - k, 0)
            const r2 = Math.min(i + k, m - 1)
            const c1 = Math.max(j - k, 0)
            const c2 = Math.min(j + k, n - 1)
            mat[i][j] = prefixSum[r2 + 1][c2 + 1] - prefixSum[r1][c2 + 1] - prefixSum[r2 + 1][c1] + prefixSum[r1][c1]
        }
    }
    return mat
};

var mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]], k = 1
var ans = matrixBlockSum(mat, k)
console.table(ans)
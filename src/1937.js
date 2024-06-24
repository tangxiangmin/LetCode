/**
 * @param {number[][]} points
 * @return {number}
 */
// BF模拟一下，肯定会超时
var maxPoints = function (points) {
    const m = points.length
    const n = points[0].length
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

    dp[0] = points[0]

    for (let i = 1; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            for (let k = 0; k < n; ++k) {
                dp[i][j] = Math.max(dp[i][j], points[i][j] + dp[i - 1][k] - Math.abs(k - j))
            }
        }
    }
    return Math.max(...dp[m - 1])
};

// 优化
var maxPoints = function (points) {
    const m = points.length;
    const n = points[0].length;
    let f = new Array(n).fill(0);

    for (let i = 0; i < m; ++i) {
        let g = new Array(n).fill(0);
        let best = -Infinity;
        // 特殊处理abs(j-k)的步骤，通过正序和逆序两次遍历减少一层优化

        // Forward traversal
        for (let j = 0; j < n; ++j) {
            best = Math.max(best, f[j] + j);
            g[j] = Math.max(g[j], best + points[i][j] - j);
        }

        best = -Infinity;
        // Backward traversal
        for (let j = n - 1; j >= 0; --j) {
            best = Math.max(best, f[j] - j);
            g[j] = Math.max(g[j], best + points[i][j] + j);
        }

        f = g;
    }

    return Math.max(...f);
}

var points = [
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1]]
points = [[1, 5], [2, 3], [4, 2]]
var ans = maxPoints(points)
console.log(ans)
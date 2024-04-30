/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of roads) {
        g[a].push(b)
        g[b].push(a)
    }
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let val = g[i] + g[j]
            if (g[i].includes(j)) {
                val--
            }
            ans = Math.max(ans, val)

        }
    }
    return ans
};

// 可以进一步优化查询效率
var maximalNetworkRank = function (n, roads) {
    const inDegrees = new Array(n).fill(0)
    const g = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (const [a, b] of roads) {
        g[a][b] = 1
        g[b][a] = 1
        inDegrees[a]++
        inDegrees[b]++
    }
    let ans = 0
    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            let val = inDegrees[i] + inDegrees[j] - g[i][j]
            ans = Math.max(ans, val)
        }
    }
    return ans
}
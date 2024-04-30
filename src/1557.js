/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// 题目有唯一解，则值需要找到入度为0的顶点即可
var findSmallestSetOfVertices = function (n, edges) {
    const g = new Array(n).fill(0)
    for (const [a, b] of edges) {
        g[b]++
    }
    let ans = []
    for (let i = 0; i < n; ++i) {
        if (g[i] === 0) {
            ans.push(i)
        }
    }
    return ans
};

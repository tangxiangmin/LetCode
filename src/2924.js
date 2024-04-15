/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
// 思路：看起来是找到没有任何父节点的根节点，如果只有一个，则返回
var findChampion = function (n, edges) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of edges) {
        g[b].push(a)
    }
    let ans = -1
    for (let i = 0; i < n; ++i) {
        if (!g[i].length) {
            if (ans === -1) {
                ans = i
            } else {
                return -1
            }
        }
    }
    return ans
};
// 看起来不用保存父节点，只需要记录数量就行了
var findChampion = function (n, edges) {
    const g = new Array(n).fill(0)
    for (const e of edges) {
        g[e[1]]++
    }
    let ans = -1
    for (let i = 0; i < n; ++i) {
        if (g[i] === 0) {
            if (ans === -1) {
                ans = i
            } else {
                return -1
            }
        }
    }
    return ans
}
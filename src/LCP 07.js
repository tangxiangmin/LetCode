/**
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
// 同一个人可以反复接收，因此不记录是否访问过，而是使用count > k作为递归终止条件
var numWays = function (n, relation, k) {
    const g = new Array(n).fill(0).map(() => new Array())

    for (const edge of relation) {
        const [a, b] = edge
        g[a].push(b)
    }
    let ans = 0
    function dfs(i, count) {
        if (count > k) return

        if (i === n - 1 && count === k) {
            ans++
        }

        for (const next of g[i]) {
            dfs(next, count + 1)
        }
    }
    dfs(0, 0)
    return ans
};

var n = 5, relation = [[0, 2], [2, 1], [3, 4], [2, 3], [1, 4], [2, 0], [0, 4]], k = 3
n = 3, relation = [[0, 1], [0, 2], [2, 1], [1, 2], [1, 0], [2, 0]], k = 5
var ans = numWays(n, relation, k)
console.log(ans)
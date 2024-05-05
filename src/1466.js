/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
// 思路，让0相邻的城市a都指向0，然后像相邻城市的相邻城市都指向相邻城市，递归这个过程
var minReorder = function (n, connections) {
    const g = new Array(n).fill(0).map(() => new Array())
    const connect = new Array(n).fill(0).map(() => new Array(n).fill(0))
    for (const [a, b] of connections) {
        g[a].push(b)
        g[b].push(a)
        connect[a][b] = 1
    }
    const used = new Array(n).fill(0)
    let cnt = 0
    dfs(0)
    return cnt

    function dfs(i) {
        used[i] = 1
        for (const next of g[i]) {
            if (used[next]) continue
            if (connect[next][i] !== 1) {
                cnt++
            }
            dfs(next)
        }
    }
};

// 上面的代码空间复杂度太高，需要优化，将方向直接保存在g数组中，不需要额外的connect数组
var minReorder = function (n, connections) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of connections) {
        g[a].push([b, 1]) // 1表示正向，需要反向
        g[b].push([a, -1]) // -1表示b本身就指向a,不需要转向
    }
    const used = new Array(n).fill(0)
    let ans = 0
    dfs(0)
    return ans

    function dfs(i) {
        used[i] = 1
        for (const [next, dir] of g[i]) {
            if (used[next]) continue
            if (dir === 1) {
                ans++
            }
            dfs(next)
        }
    }
};
var n = 5, connections = [[1, 0], [1, 2], [3, 2], [3, 4]]
// n = 6, connections = [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]
var ans = minReorder(n, connections)
console.log(ans)
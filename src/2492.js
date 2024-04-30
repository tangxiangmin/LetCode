/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
// 题目是求联通路径中某条道路的最小值，不是最短路径，dfs
// dfs的终点并不是到了n就终止了，还可以从n继续出发，直到遍历完所有可能得路径，这样才能统计所有路径的最小值
var minScore = function (n, roads) {
    const g = new Array(n + 1).fill(0).map(() => new Array())
    for (const [a, b, dis] of roads) {
        g[a].push([b, dis])
        g[b].push([a, dis])
    }

    const visited = new Array(n + 1).fill(0)
    let ans = Infinity
    dfs(1)

    return ans

    function dfs(i) {
        visited[i] = true
        for (const [next, dis] of g[i]) {
            ans = Math.min(ans, dis)
            if (!visited[next]) {
                dfs(next)
            }
        }
    }
};
// 用并查集
class DisjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(0)
        this.size = new Array(size).fill(0)
        for (let i = 0; i < size; ++i) {
            this.parent[i] = i
            this.size[i] = 1
        }
    }

    find(x) {
        while (this.parent[x] !== x) {
            x = this.parent[x]
        }
        return x
    }

    union(x, y) {
        const rx = this.find(x)
        const ry = this.find(y)
        if (rx === ry) return
        const sx = this.size[rx]
        const sy = this.size[ry]
        if (sy > sx) {
            // y作为根节点
            this.parent[rx] = ry
            this.size[ry] += sx
        } else {
            // x作为根节点
            this.parent[ry] = rx
            this.size[rx] += sy
        }
    }

    connected(x, y) {
        return this.find(x) === this.find(y)
    }

}
var minScore = function (n, roads) {

    const set = new DisjointSet(n + 1)
    for (const [x, y, dis] of roads) {
        set.union(x, y)
    }

    let ans = Infinity
    for (const [x, y, dis] of roads) {
        if (set.connected(1, x)) {
            ans = Math.min(ans, dis)
        }
    }
    return ans
}

var n = 4, roads = [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]
n = 6, roads = [[4, 5, 7468], [6, 2, 7173], [6, 3, 8365], [2, 3, 7674], [5, 6, 7852], [1, 2, 8547], [2, 4, 1885], [2, 5, 5192], [1, 3, 4065], [1, 4, 7357]]
var ans = minScore(n, roads)
console.log(ans)
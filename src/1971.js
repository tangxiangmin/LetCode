/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// dfs
var validPath = function (n, edges, source, destination) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const edge of edges) {
        const [u, v] = edge
        g[u].push(v)
        g[v].push(u)
    }
    const visited = []
    function dfs(n) {
        if (n === destination) {
            return true
        }
        if (visited[n]) return false
        visited[n] = true
        for (const next of g[n]) {
            if (dfs(next)) {
                return true
            }
        }
        return false
    }
    return dfs(source)
};
// 检查是否有属于同一个集合，可以使用并查集
class DisjointSet {
    constructor(size) {
        this.parent = new Array(size).fill(0)
        for (let i = 0; i < size; ++i) {
            this.parent[i] = i
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

        this.parent[ry] = rx
    }
    connected(x, y) {
        return this.find(x) === this.find(y)
    }
}
var validPath = function (n, edges, source, destination) {
    const set = new DisjointSet(n)
    for (const [a, b] of edges) {
        set.union(a, b)
    }
    return set.connected(source, destination)
}

var n = 3, edges = [[0, 1], [1, 2], [2, 0]], source = 0, destination = 2
// n = 6, edges = [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], source = 0, destination = 5
var ans = validPath(n, edges, source, destination)
console.log(ans)
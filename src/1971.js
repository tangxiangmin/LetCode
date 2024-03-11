/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
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

var n = 3, edges = [[0, 1], [1, 2], [2, 0]], source = 0, destination = 2
n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
var ans = validPath(n, edges, source, destination)
console.log(ans)
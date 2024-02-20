/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} restricted
 * @return {number}
 */
var reachableNodes = function (n, edges, restricted) {
    var edgeMap = []
    for (var edge of edges) {
        var [a, b] = edge
        if (!edgeMap[a]) edgeMap[a] = []
        if (!edgeMap[b]) edgeMap[b] = []
        edgeMap[a].push(b)
        edgeMap[b].push(a)
    }
    var restrictedMap = {}
    for (var i of restricted) {
        restrictedMap[i] = true
    }

    var visited = []
    var ans = 0
    function dfs(i) {
        if (restrictedMap[i]) return
        if (visited[i]) return
        visited[i] = true
        ans++
        var children = edgeMap[i]
        for (var child of children) {
            dfs(child)
        }
    }
    dfs(0)
    return ans
};
var n = 7, edges = [[0, 1], [1, 2], [3, 1], [4, 0], [0, 5], [5, 6]], restricted = [4, 5]
n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]
var ans = reachableNodes(n, edges, restricted)
console.log(ans)
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
    const n = graph.length
    const visited = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        if (visited[i] == 0 && !dfs(i, 1)) {
            return false
        }
    }
    return true

    function dfs(i, color) {
        if (visited[i] !== 0) {
            return visited[i] === color
        }
        visited[i] = color
        for (const w of graph[i]) {
            if (!dfs(w, -color)) {
                return false
            }
        }
        return true
    }
};
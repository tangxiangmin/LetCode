/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @param {number[][]} queries
 * @return {boolean[]}
 */
// 思路，拓扑排序之后对比索引值
// 拓扑排序只知道先后，不知道是否相遇
var checkIfPrerequisite = function (numCourses, prerequisites, queries) {
    const g = new Array(numCourses).fill(0).map(() => new Array())
    for (const [a, b] of prerequisites) {
        g[a].push(b)
    }
    function dfs(u, v, visited) {
        if (u === v) return true
        if (visited[u]) return false
        visited[u] = true
        for (const next of g[u]) {
            if (dfs(next, v, visited)) {
                return true
            }
        }
        return false
    }

    return queries.map(row => {
        const [u, v] = row
        return dfs(u, v, [])
    })
};
var numCourses = 2, prerequisites = [], queries = [[1, 0], [0, 1]]
numCourses = 2, prerequisites = [[1, 0]], queries = [[0, 1], [1, 0]]
var ans = checkIfPrerequisite(numCourses, prerequisites, queries)
console.log(ans)
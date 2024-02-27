/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// 求路径组合，可以用回溯
// 由于是有向图，好像不需要使用visited变量记录是否访问过
var allPathsSourceTarget = function (graph) {
    var ans = []
    var visited = []
    var target = graph.length - 1// 目标节点
    function backtrack(n, path) {
        if (n === target) {
            ans.push([...path])
            return
        }
        for (var next of graph[n]) {
            if (visited[next]) continue
            path.push(next)
            visited[next] = true
            backtrack(next, path)
            path.pop(next)
            visited[next] = false
        }
    }
    backtrack(0, [0])
    return ans
};
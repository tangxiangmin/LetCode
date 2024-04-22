/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
// 看起来可以试试BF 
// dfs遍历initial，忽略某个索引值后最终感染的数量
var minMalwareSpread = function (graph, initial) {
    const n = graph.length

    let min = Infinity
    let minIndex = n
    for (const node of initial) {
        let visited = new Array(n).fill(0)
        for (const i of initial) {
            if (i === node) continue
            dfs(i, visited)
        }
        let ans = visited.filter(row => row === 1).length
        if (min > ans) {
            min = ans
            minIndex = node
        } else if (min === ans) {
            minIndex = Math.min(node, minIndex)
        }
    }
    return minIndex

    function dfs(i, visited) {
        if (visited[i]) return
        visited[i] = 1
        for (let j = 0; j < n; ++j) {
            if (j === i) continue
            if (graph[i][j] === 1) {
                dfs(j, visited)
            }
        }

    }
};

// 看起来是可以用并查集优化
var minMalwareSpread = function (graph, initial) {

}

var graph = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]], initial = [0, 2]
// graph = [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1]], initial = [0, 1]

// graph = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]],
//     initial = [1, 2]
var ans = minMalwareSpread(graph, initial)
console.log(ans)
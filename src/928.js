/**
 * @param {number[][]} graph
 * @param {number[]} initial
 * @return {number}
 */
// 跟924比较像，但是会移除链接，因此实现`disconnect`和`reconnect`两个方法
var minMalwareSpread = function (graph, initial) {
    const n = graph.length

    let min = Infinity
    let minIndex = n
    for (const node of initial) {
        let visited = new Array(n).fill(0)
        const prev = disconnect(node)
        for (const i of initial) {
            if (i === node) continue
            dfs(i, visited)
        }
        reconnect(node, prev)
        let ans = visited.filter(row => row === 1).length
        if (min > ans) {
            min = ans
            minIndex = node
        } else if (min === ans) {
            minIndex = Math.min(node, minIndex)
        }
    }
    return minIndex

    function disconnect(i) {
        let prev = graph[node]
        graph[i] = new Array(n).fill(0)

        for (let j = 0; j < n; ++j) {
            graph[j][i] = 0
        }
        return prev
    }
    function reconnect(i, prev) {
        graph[i] = prev
        for (let j = 0; j < n; ++j) {
            graph[j][i] = prev[j]
        }
    }

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

var graph = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]], initial = [0, 1]
var ans = minMalwareSpread(graph, initial)
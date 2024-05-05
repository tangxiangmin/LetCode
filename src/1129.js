/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */

const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

// 未通过全部测试用例
var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    const red = new Array(n).fill(0).map(() => new Array())
    const blue = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of redEdges) {
        red[a].push(b)
    }
    for (const [a, b] of blueEdges) {
        blue[a].push(b)
    }

    const ans = []
    for (let i = 0; i < n; ++i) {
        const val = Math.min(dfs(0, i, true, {}), dfs(0, i, false, {}))
        ans.push(val === Infinity ? -1 : val)
    }

    return ans
    // 由于要求最短路径，且图中可能存在环因此某个节点可能会被重复访问，下面这种dfs不行
    function dfs(i, target, flag, visited) {
        if (i === target) return 0
        const key = `${i},${target},${flag}`
        if (visited[key] !== undefined) return visited[key]
        visited[key] = Infinity
        const next = flag ? red[i] : blue[i]

        for (const j of next) {
            const val = dfs(j, target, !flag, visited)
            visited[key] = Math.min(val + 1, visited[key])
        }
        return visited[key]

    }
};

var shortestAlternatingPaths = function (n, redEdges, blueEdges) {
    const red = new Array(n).fill(0).map(() => new Array())
    const blue = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of redEdges) {
        red[a].push(b)
    }
    for (const [a, b] of blueEdges) {
        blue[a].push(b)
    }

    const queue = [[0, true], [0, false]] // queue[i] = [x,flag] 表示达到第x节点的最短路径第一条边为红色或蓝色，flag=true表示为红色

    const redDis = new Array(n).fill(Infinity)
    redDis[0] = 0
    const blueDis = new Array(n).fill(Infinity)
    blueDis[0] = 0

    while (queue.length) {
        const [x, flag] = queue.shift()
        const next = flag ? red : blue
        const dis = flag ? redDis : blueDis

        for (const y of next[x]) {
            // 由于每条边的长度都为1，因此广度优先搜索第一次遍历到节点时就是最短距离
            // 所以对于环中那些已经访问到的节点，这里可以直接跳过
            if (dis[y] !== Infinity) continue
            // 根据前一步的颜色的值+1
            dis[y] = (flag ? blueDis : redDis)[x] + 1
            queue.push([y, !flag])
        }
    }

    const ans = []
    for (let i = 0; i < n; ++i) {
        ans[i] = Math.min(redDis[i], blueDis[i])
        if (ans[i] === Infinity) {
            ans[i] = -1
        }

    }
    return ans
}
var n = 3, red_edges = [[0, 1], [1, 2]], blue_edges = []
// n = 3, red_edges = [[0, 1]], blue_edges = [[2, 1]]
// n = 3, red_edges = [[0, 1], [0, 2]], blue_edges = [[1, 0]]
n = 5, red_edges = [[0, 1], [1, 2], [2, 3], [3, 4]], blue_edges = [[1, 2], [2, 3], [3, 1]]
var ans = shortestAlternatingPaths(n, red_edges, blue_edges)
console.log(ans)
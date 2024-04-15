/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 思路，每个节点保存他自己被访问的最小时间，如果有节点一直未被访问，则返回-1
// 每个节点需要被访问多次，如何解决有环的问题？
// 查了一下，居然要用到 Dijkstra 算法

const { MinPriorityQueue } = require("@datastructures-js/priority-queue")

// 参考：https://leetcode.cn/problems/network-delay-time/solutions/2668220/liang-chong-dijkstra-xie-fa-fu-ti-dan-py-ooe8/
var networkDelayTime = function (times, n, k) {
    var g = new Array(n).fill(0).map(() => new Array(n).fill(Infinity))
    for (const [x, y, t] of times) {
        g[x - 1][y - 1] = t
    }

    var visited = new Array(n).fill(0)
    var dis = new Array(n).fill(Infinity)
    dis[k - 1] = 0 // 从k开始

    while (true) {
        let x = -1
        for (let i = 0; i < n; ++i) {
            if (!visited[i] && (x < 0 || dis[x] > dis[i])) {
                x = i
            }
        }
        //  // 已经全部遍历完毕
        if (x === -1) {
            return Math.max(...dis)
        }
        // 待遍历的节点为空
        if (dis[x] === Infinity) {
            return -1
        }
        visited[x] = 1
        // 更新 x 的邻居的最短路
        for (let i = 0; i < n; ++i) {
            dis[i] = Math.min(dis[i], dis[x] + g[x][i])
        }
    }
}
// 上面这种 复杂度为N^2，实际上可以用一个最小堆来保存邻近的节点
var networkDelayTime = function (times, n, k) {
    var g = new Array(n).fill(0).map(() => new Array())
    for (const [x, y, t] of times) {
        g[x - 1].push([y, t])
    }

    const queue = new MinPriorityQueue()
    queue.enqueue(k, 0)
    let dis = new Array(n).fill(Infinity)
    dis[k - 1] = 0
    while (!queue.isEmpty()) {
        const { element: x, priority: cost } = queue.dequeue()
        if (cost > dis[x - 1]) continue // 之前出过堆的元素，这里不需要再入堆
        for (const [y, t] of g[x - 1]) {
            const v = cost + t
            if (dis[y - 1] > v) {
                dis[y - 1] = v
                queue.enqueue(y, v)
            }
        }
    }
    const max = Math.max(...dis)
    return max === Infinity ? -1 : max
}


var times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2
// times = [[1, 2, 1]], n = 2, k = 1
// times = [[1, 2, 1]], n = 2, k = 2
// times = [[1, 2, 1], [2, 1, 3]], n = 2, k = 2
// times = [[1, 2, 1], [2, 3, 2], [1, 3, 2]], n = 3, k = 1
var ans = networkDelayTime(times, n, k)
console.log(ans)
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

// Dijkstra
var maxProbability = function (n, edges, succProb, start_node, end_node) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (let i = 0; i < edges.length; ++i) {
        const [a, b] = edges[i]
        const p = succProb[i]
        g[a].push([b, p])
        g[b].push([a, p])
    }
    const queue = new MaxPriorityQueue()
    queue.enqueue(start_node, 1)
    const dis = new Array(n).fill(0)
    while (!queue.isEmpty()) {
        const { element, priority } = queue.dequeue()
        if (priority < dis[element]) continue

        for (const [next, p] of g[element]) {
            const v = priority * p
            if (dis[next] < v) {
                dis[next] = v
                queue.enqueue(next, v)
            }
        }
    }
    return dis[end_node]
};

var n = 3, edges = [[0, 1], [1, 2], [0, 2]], succProb = [0.5, 0.5, 0.2], start = 0, end = 2
n = 10, edges = [[3, 5], [3, 4], [6, 8], [1, 5], [2, 8], [6, 9], [0, 2], [7, 8], [0, 4], [3, 7], [8, 9], [5, 8], [3, 6], [0, 6], [1, 6], [0, 1], [0, 3], [5, 6], [1, 9]], succProb = [0.72, 0.81, 0.18, 0.62, 0.96, 0.45, 0.19, 0.77, 0.1, 0.99, 0.49, 0.25, 0.45, 0.68, 0.95, 0.61, 0.11, 0.72, 0.2], start = 1, end = 6
n = 3, edges = [[0, 1], [1, 2], [0, 2]], succProb = [0.5, 0.5, 0.3], start = 0, end = 2
var ans = maxProbability(n, edges, succProb, start, end)
console.log(ans)

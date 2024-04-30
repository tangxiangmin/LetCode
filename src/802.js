/**
 * @param {number[][]} graph
 * @return {number[]}
 */
// 思路：拓扑排序的逆运算，将图的边方向对调，就可以从入度为0的元素开始拓扑排序了，能进入队列的，就是符合条件的元素
var eventualSafeNodes = function (graph) {
    const n = graph.length
    const queue = []

    const g = new Array(n).fill(0).map(() => new Array())

    const inDegrees = new Array(n).fill(0)
    for (let i = 0; i < n; ++i) {
        const next = graph[i]
        if (!next.length) {
            queue.push(i)
        }
        inDegrees[i] = graph[i].length
        for (const node of next) {
            g[node].push(i)
        }
    }
    while (queue.length) {
        const node = queue.shift()
        for (const next of g[node]) {
            inDegrees[next]--
            if (inDegrees[next] === 0) {
                queue.push(next)
            }
        }
    }
    const ans = []
    for (let i = 0; i < n; ++i) {
        if(inDegrees[i]===0){
            ans.push(i)
        }
    }
    return ans
};
var graph = [[1, 2], [2, 3], [5], [0], [5], [], []]
// graph = [[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]
// graph = [[], [0, 2, 3, 4], [3], [4], []]
// graph = [[4, 9], [3, 5, 7], [0, 3, 4, 5, 6, 8], [7, 8, 9], [5, 6, 7, 8], [6, 7, 8, 9], [7, 9], [8, 9], [9], []]
var ans = eventualSafeNodes(graph)
console.log(ans)
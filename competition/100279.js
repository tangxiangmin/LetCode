const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} disappear
 * @return {number[]}
 */
var minimumTime = function (n, edges, disappear) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const [u, v, len] of edges) {
        g[u].push([v, len])
        g[v].push([u, len])
    }
    var ans = new Array(n).fill(-1)
    const cache = {}
    function dfs(i, t) {
        const key = `${i},${t}`
        if (cache[key]) return
        cache[key] = 1
        const children = g[i]
        if (ans[i] === -1 || t < ans[i]) {
            ans[i] = t;
        } else {
            return;
        }
        for (const child of children) {
            const [next, len] = child
            if (t + len >= disappear[next]) {
                continue
            }
            dfs(next, t + len)
        }
    }
    dfs(0, 0)
    return ans
};

var minimumTime = function (n, edges, disappear) {
    const graph = Array.from({ length: n }, () => []);

    // 构建图的邻接表表示
    for (const [u, v, len] of edges) {
        graph[u].push([v, len]);
        graph[v].push([u, len]);
    }

    const pq = new MinPriorityQueue();
    pq.enqueue(0, 0); // 起点 0 的初始时间为 0

    const answer = new Array(n).fill(-1);
    answer[0] = 0;

    while (!pq.isEmpty()) {
        const { element: u, priority: time } = pq.dequeue();

        if (answer[u] > time) continue

        for (const [v, len] of graph[u]) {
            const newTime = time + len;
            if (newTime >= disappear[v]) continue

            // 如果新的到达时间更小,则更新
            if (answer[v] === -1 || newTime < answer[v]) {
                answer[v] = newTime;
                pq.enqueue(v, newTime);
            }
        }
    }

    return answer;
};


var n = 3, edges = [[0, 1, 2], [1, 2, 1], [0, 2, 4]], disappear = [1, 1, 5]
n = 3, edges = [[0, 1, 2], [1, 2, 1], [0, 2, 4]], disappear = [1, 3, 5]
n = 2, edges = [[0, 1, 1]], disappear = [1, 1]
// n = 8, edges = [[4, 0, 5], [3, 7, 3], [0, 2, 3], [3, 5, 3], [7, 0, 1], [2, 0, 3], [7, 7, 10]], disappear = [15, 8, 4, 3, 9, 18, 9, 13]  // [0,-1,3,-1,5,-1,-1,1]
// n = 1, edges = [[0, 0, 4], [0, 0, 2], [0, 0, 7], [0, 0, 8], [0, 0, 10], [0, 0, 4], [0, 0, 6], [0, 0, 10], [0, 0, 3], [0, 0, 1]], disappear = [19]
var ans = minimumTime(n, edges, disappear)
console.log(ans)
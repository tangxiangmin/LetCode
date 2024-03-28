// 参考题解 Dijkstra
var Graph = function(n, edges) {
    const g = Array.from({length: n}, () => Array(n).fill(Infinity)); // 邻接矩阵
    for (const [x, y, w] of edges) {
        g[x][y] = w; // 添加一条边（题目保证没有重边）
    }

    this.addEdge = function(e) {
        g[e[0]][e[1]] = e[2]; // 添加一条边（题目保证这条边之前不存在）
    }

    this.shortestPath = function(start, end) {
        // dis[i] 表示从起点 start 出发，到节点 i 的最短路长度
        const dis = Array(n).fill(Infinity);
        dis[start] = 0;
        const vis = Array(n).fill(false);
        while (true) {
            let x = -1;
            for (let i = 0; i < n; i++) {
                if (!vis[i] && (x < 0 || dis[i] < dis[x])) {
                    x = i;
                }
            }
            if (x < 0 || dis[x] === Infinity) { // 所有从起点能到达的点都被更新了
                return -1; // 无法到达终点
            }
            if (x === end) { // 找到终点，提前退出
                return dis[x];
            }
            vis[x] = true; // 标记，在后续的循环中无需反复更新 x 到其余点的最短路长度
            for (let y = 0; y < n; y++) {
                dis[y] = Math.min(dis[y], dis[x] + g[x][y]); // 更新最短路长度
            }
        }
    }
};

var Graph = function (n, edges) {
    const g = Array.from({ length: n }, () => []); // 邻接表
    for (const [x, y, w] of edges) {
        g[x].push([y, w]);
    }

    this.addEdge = function (e) {
        g[e[0]].push([e[1], e[2]]);
    }

    this.shortestPath = function (start, end) {
        // dis[i] 表示从起点 start 出发，到节点 i 的最短路长度
        const dis = Array(n).fill(Infinity);
        dis[start] = 0;
        const pq = new MinPriorityQueue({ priority: (p) => p[0] });
        pq.enqueue([0, start]);
        while (!pq.isEmpty()) {
            const [d, x] = pq.dequeue().element;
            if (x === end) { // 计算出从起点到终点的最短路长度
                return d;
            }
            if (d > dis[x]) { // x 之前出堆过，无需更新邻居的最短路
                continue;
            }
            for (const [y, w] of g[x]) {
                if (d + w < dis[y]) {
                    dis[y] = d + w; // 更新最短路长度
                    pq.enqueue([dis[y], y]);
                }
            }
        }
        return -1; // 无法到达终点
    }
};

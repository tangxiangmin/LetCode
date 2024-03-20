/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 思路，每个节点保存他自己被访问的最小时间，如果有节点一直未被访问，则返回-1
// 每个节点需要被访问多次，如何解决有环的问题？
// 查了一下，居然要用到 Dijkstra 算法
// 参考：https://leetcode.cn/problems/network-delay-time/solutions/2668220/liang-chong-dijkstra-xie-fa-fu-ti-dan-py-ooe8/
var networkDelayTime = function(times, n, k) {
    const g = Array.from({length: n}, () => Array(n).fill(Infinity)); // 邻接矩阵
    for (const [x, y, d] of times) {
        g[x - 1][y - 1] = d;
    }

    const dis = Array(n).fill(Infinity);
    dis[k - 1] = 0;
    const done = Array(n).fill(false);
    while (true) {
        let x = -1;
        for (let i = 0; i < n; i++) {
            if (!done[i] && (x < 0 || dis[i] < dis[x])) {
                x = i;
            }
        }
        if (x < 0) {
            return Math.max(...dis);
        }
        if (dis[x] === Infinity) { // 有节点无法到达
            return -1;
        }
        done[x] = true; // 最短路长度已确定（无法变得更小）
        for (let y = 0; y < n; y++) {
            // 更新 x 的邻居的最短路
            dis[y] = Math.min(dis[y], dis[x] + g[x][y]);
        }
    }
};


var times = [[2, 1, 1], [2, 3, 1], [3, 4, 1]], n = 4, k = 2
times = [[1, 2, 1]], n = 2, k = 1
times = [[1, 2, 1]], n = 2, k = 2
// times = [[1, 2, 1], [2, 1, 3]], n = 2, k = 2
times = [[1, 2, 1], [2, 3, 2], [1, 3, 2]], n = 3, k = 1
var ans = networkDelayTime(times, n, k)
console.log(ans)
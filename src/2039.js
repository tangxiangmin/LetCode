/**
 * @param {number[][]} edges
 * @param {number[]} patience
 * @return {number}
 */
// 计算每个节点距离0节点的距离，这样就知道了消息的传输时间
var networkBecomesIdle = function (edges, patience) {
    const n = patience.length
    const g = new Array(n).fill(0).map(() => new Array())
    for (const [a, b] of edges) {
        g[a].push(b)
        g[b].push(a)
    }

    const dis = new Array(n).fill(Infinity)
    dis[0] = 0
    let queue = [0]
    let ans = 0
    while (queue.length) {
        const x = queue.shift()
        for (const y of g[x]) {
            if (dis[y] !== Infinity) continue
            dis[y] = dis[x] + 1
            queue.push(y)

            var num = Math.floor((dis[y] * 2 - 1) / patience[y]);
            var rest = num * patience[y];
            ans = Math.max(ans, rest + dis[y] * 2);
        }
    }

    return ans + 1
};
var edges = [[0, 1], [1, 2]], patience = [0, 2, 1]
// edges = [[0, 1], [0, 2], [1, 2]], patience = [0, 10, 10]
var ans = networkBecomesIdle(edges, patience)
console.log(ans)
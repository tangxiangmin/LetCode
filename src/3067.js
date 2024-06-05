/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
// 题目可以组成一颗无根带权树
var countPairsOfConnectableServers = function (edges, signalSpeed) {
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => []);

    for (const [x, y, wt] of edges) {
        g[x].push([y, wt]);
        g[y].push([x, wt]);
    }

    const dfs = (x, fa, s) => {
        let cnt = (s % signalSpeed === 0) ? 1 : 0;
        for (const [y, wt] of g[x]) {
            if (y !== fa) {
                cnt += dfs(y, x, s + wt);
            }
        }
        return cnt;
    };

    const ans = Array(n).fill(0);
    for (let i = 0; i < g.length; i++) {
        if (g[i].length === 1) {
            continue;
        }
        let s = 0;
        for (const [y, wt] of g[i]) {
            const cnt = dfs(y, i, wt);
            ans[i] += cnt * s;
            s += cnt;
        }
    }

    return ans;
}
var edges = [[0, 1, 1], [1, 2, 5], [2, 3, 13], [3, 4, 9], [4, 5, 2]], signalSpeed = 1
var ans = countPairsOfConnectableServers(edges, signalSpeed)
console.log(ans)
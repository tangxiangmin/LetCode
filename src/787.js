/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
// dfs，最后的几个测试用例会超时
var findCheapestPrice = function (n, flights, src, dst, k) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const row of flights) {
        const [from, to, price] = row
        g[from].push([to, price])
    }

    let min = Infinity
    function dfs(i, count, sum) {
        if (count > k + 1) return
        if (i === dst) {
            min = Math.min(min, sum)
            return
        }
        for (const next of g[i]) {
            const [to, price] = next
            if (min < sum + price) continue
            dfs(to, count + 1, sum + price)
        }
    }
    dfs(src, 0, 0)
    return min == Infinity ? -1 : min
};

// 参考题解
// 是否用f[t][i]表示经过t次航班，从src出发到达i的最小花费
// f[t][i] = 枚举最后一次航班的起点j min(f[t-1][j] + cost(j,i))
// 最后的结果为t从1到k+1次航班的f[t][dst]中的最小值
var findCheapestPrice = function (n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1;
    const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(INF));
    f[0][src] = 0;
    for (let t = 1; t <= k + 1; ++t) {
        for (const flight of flights) {
            const j = flight[0], i = flight[1], cost = flight[2];
            f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);
        }
    }
    let ans = INF;
    for (let t = 1; t <= k + 1; ++t) {
        ans = Math.min(ans, f[t][dst]);
    }
    return ans == INF ? -1 : ans;
};

// 可以使用两个一维数组来节省空间复杂度
var findCheapestPrice = function (n, flights, src, dst, k) {
    const INF = 10000 * 101 + 1;
    let f = new Array(n).fill(INF);
    f[src] = 0;
    let ans = INF;
    for (let t = 1; t <= k + 1; ++t) {
        const g = new Array(n).fill(INF);
        for (const flight of flights) {
            const j = flight[0], i = flight[1], cost = flight[2];
            g[i] = Math.min(g[i], f[j] + cost);
        }
        f = g;
        ans = Math.min(ans, f[dst]);
    }
    return ans == INF ? -1 : ans;
};

var n = 3, edges = [[0, 1, 100], [1, 2, 100], [0, 2, 500]], src = 0, dst = 2, k = 1
var ans = findCheapestPrice(n, edges, src, dst, k)
console.log(ans)
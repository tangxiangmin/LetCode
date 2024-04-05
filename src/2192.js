/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
// 思路，将所有边反向，看看每个节点可以到达的位置
// 空间复杂度居然会超时
var getAncestors = function (n, edges) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const edge of edges) {
        const [from, to] = edge
        // g[from].push(to)
        g[to].push(from)
    }
    // console.table(g)

    const ans = []

    const visited = new Array(n).fill(0)

    for (let i = 0; i < n; ++i) {
        const path = new Array()
        dfs(i, path)
        ans[i] = Array.from(new Set(path)).sort((a, b) => a - b)
    }

    function dfs(i, path) {
        for (const next of g[i]) {
            if (visited[next]) continue
            visited[next] = 1
            path.push(next)
            dfs(next, path)
            visited[next] = 0
        }
    }
    return ans
};

// 在上面的代码中，visited中为true的元素实际上就是对应的路径，并且还不需要单独排序了
var getAncestors = function (n, edges) {
    const g = new Array(n).fill(0).map(() => new Array())
    for (const edge of edges) {
        const [from, to] = edge
        // g[from].push(to)
        g[to].push(from)
    }
    // console.table(g)

    const ans = []

    const visited = new Array(n).fill(0)

    for (let i = 0; i < n; ++i) {
        visited.fill(0)
        dfs(i)

        visited[i] = 0 // 不包含自己
        ans[i] = []
        for (let j = 0; j < n; ++j) {
            if (visited[j]) {
                ans[i].push(j)
            }
        }
    }

    function dfs(i) {
        visited[i] = 1
        for (const next of g[i]) {
            if (visited[next]) continue
            visited[next] = 1
            dfs(next)
        }
    }
    return ans
};

var getAncestors2 = function (n, edges) {
    const g = Array.from({ length: n }, () => []);
    for (const [x, y] of edges) {
        g[y].push(x); // 反向建图
    }

    function dfs(x) {
        vis[x] = true; // 避免重复访问
        for (const y of g[x]) {
            if (!vis[y]) {
                dfs(y); // 只递归没有访问过的点
            }
        }
    }
    const ans = Array.from({ length: n }, () => []);
    const vis = Array(n);
    for (let i = 0; i < n; i++) {
        vis.fill(false);
        dfs(i); // 从 i 开始 DFS
        vis[i] = false; // ans[i] 不含 i
        for (let j = 0; j < n; j++) {
            if (vis[j]) {
                ans[i].push(j);
            }
        }
    }
    return ans;
};


var n = 8, edgeList = [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]]
var ans = getAncestors(n, edgeList)
console.log(JSON.stringify(ans))
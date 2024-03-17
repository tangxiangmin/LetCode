/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
// md又超时了，
var findMinHeightTrees = function (n, edges) {
    const g = new Array(n).fill(0).map(() => new Array(0))
    for (const p of edges) {
        const [a, b] = p
        g[a].push(b)
        g[b].push(a)
    }

    const visited = []
    // 返回以i为根节点时，树的高度
    function dfs(i) {
        if (visited[i]) return -1

        visited[i] = true
        const children = g[i]
        let deep = Math.max(...children.map(child => {
            return dfs(child)
        }))
        visited[i] = false
        return deep + 1
    }

    let min = Infinity
    let ans = []
    for (let i = 0; i < n; ++i) {
        let deep = dfs(i)
        if (min > deep) {
            min = deep
            ans = [i]
        } else if (min === deep) {
            ans.push(i)
        }
    }
    return ans
};
// 拓扑排序，参考的题解
var findMinHeightTrees = function(n, edges) {
    const ans = [];
    if (n === 1) {
        ans.push(0);
        return ans;
    }
    const degree = new Array(n).fill(0);
    const adj = new Array(n).fill(0).map(() => new Array());
    for (const edge of edges) {
        adj[edge[0]].push(edge[1]);
        adj[edge[1]].push(edge[0]);
        degree[edge[0]]++;
        degree[edge[1]]++;
    }
    const queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] === 1) {
            queue.push(i);
        }
    }
    let remainNodes = n;
    while (remainNodes > 2) {
        const sz = queue.length;
        remainNodes -= sz;
        for (let i = 0; i < sz; i++) {
            const curr = queue.shift();
            for (const v of adj[curr]) {
                degree[v]--;
                if (degree[v] === 1) {
                    queue.push(v);
                }
            }
        }
    }
    while (queue.length) {
        ans.push(queue.shift());
    }
    return ans;
};

var n = 4, edges = [[1, 0], [1, 2], [1, 3]]
n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
var ans = findMinHeightTrees(n, edges)
console.log(ans)
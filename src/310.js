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
var n = 4, edges = [[1, 0], [1, 2], [1, 3]]
n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]
var ans = findMinHeightTrees(n, edges)
console.log(ans)
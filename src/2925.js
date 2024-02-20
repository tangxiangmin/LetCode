/**
 * @param {number[][]} edges
 * @param {number[]} values
 * @return {number}
 */
// 先将所有value都选择，然后判断哪些不能选，对于节点i有两种情况，
// 不选i，则所有子节点都可以选择
// 选择i，则其子节点需要失去的最小分数
var maximumScoreAfterOperations = function (edges, values) {
    var g = new Array(edges.length + 1).fill(0).map(() => new Array())
    for (var edge of edges) {
        var [n1, n2] = edge
        g[n1].push(n2)
        g[n2].push(n1)
    }
    // 计算以 n 为根的子树是健康时，失去的最小分数
    function dfs(n, f) {
        if (g[n].length === 1) {
            return values[n] // 只有单个节点的树时，失去所有分才能选择
        }
        // 选择当前节点，则所有的子树需要健康
        var loss = 0
        for (var child of g[n]) {
            if (child !== f) {
                loss += dfs(child, n)
            }
        }
        // 对比是否选择当前节点，返回损失的较小值
        return Math.min(values[n], loss)

    }
    dfs(0, -1)
    return values.reduce((acc, row) => {
        return acc + row
    }, 0) - dfs(0, -1)

};
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
// 思路，构建树，将问题拆成从当前节点遍历右苹果的子树的问题 + 2
var minTime = function (n, edges, hasApple) {
    var edgeMap = {}
    for (var edge of edges) {
        var [n1, n2] = edge
        if (!edgeMap[n1]) edgeMap[n1] = []
        if (!edgeMap[n2]) edgeMap[n2] = []
        edgeMap[n1].push(n2)
        edgeMap[n2].push(n1)
    }

    var visted = []
    function dfs(n) {
        visted[n] = true
        var children = edgeMap[n]
        var sum = 0
        if (Array.isArray(children)) {
            for (var child of children) {
                if (!visted[child]) {
                    var [flag, total] = dfs(child)
                    //如果子树不包含苹果，则不需要浪费时间
                    if (flag) {
                        sum += total + 2
                    }
                }
            }
        }

        if (hasApple[n]) {
            return [true, sum]
        }
        return [sum > 0, sum]

    }
    var [flag, sum] = dfs(0)
    return sum
};
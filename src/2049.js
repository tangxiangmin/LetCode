/**
 * @param {number[]} parents
 * @return {number}
 */
// 有几条边就有几个子树
// 每个节点保存他左右子树的节点数量l和r，则断开之后父节点构成子树的数量等于 n （总节点）- l - r - 1
var countHighestScoreNodes = function (parents) {
    var total = parents.length
    var childrenMap = {}
    for (var i = 1; i < parents.length; ++i) {
        var p = parents[i]
        if (!Array.isArray(childrenMap[p])) childrenMap[p] = []
        childrenMap[p].push(i)
    }

    var max = 0
    var ans = 0
    function dfs(n) {
        var children = childrenMap[n]
        var left = 0
        var right = 0
        if (Array.isArray(children)) {
            if (children[0]) {
                var [l, r] = dfs(children[0])
                left = l + r + 1
            }
            if (children[1]) {
                var [l, r] = dfs(children[1])
                right = l + r + 1
            }
        }

        var parent = total - left - right - 1
        var res = (left ? left : 1) * (right ? right : 1) * (parent ? parent : 1)
        if (max < res) {
            max = res
            ans = 1
        } else if (max === res) {
            ans++
        }
        return [left, right]
    }
    dfs(0)
    return ans
};
var parents = [-1, 2, 0, 2, 0]
var ans = countHighestScoreNodes(parents)
console.log(ans)
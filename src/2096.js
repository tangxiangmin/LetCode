/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} startValue
 * @param {number} destValue
 * @return {string}
 */
// 思路，从根节点开始，分别找到目标节点，然后判断是不是在同一个子树上，然后再将startValue的路径反向即可
// 本质上就是找两个节点的最近公共父节点
var getDirections = function (root, startValue, destValue) {

    function find(node) {
        if (!node) return null
        if (node.val === startValue || node.val === destValue) {
            return node
        }
        var left = find(node.left)
        var right = find(node.right)
        if (!left && !right) return null
        if (left && right) return node
        if (!left) return right
        return left
    }

    var parent = find(root)

    function dfs(node, target, path) {
        if (!node) return ''
        if (node.val === target) {
            return path
        }
        var l = dfs(node.left, target, path + 'L')
        if (l) {
            return l
        }
        var r = dfs(node.right, target, path + 'R')
        return r
    }
    var p1 = dfs(parent, startValue, '')
    var p2 = dfs(parent, destValue, '')
    var ans = ''
    for (var i = 0; i < p1.length; ++i) {
        ans += 'U'
    }
    ans += p2
    return ans
};
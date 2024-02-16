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
 * @param {number[]} voyage
 * @return {number[]}
 */
var flipMatchVoyage = function (root, voyage) {
    var currentIndex = 0
    var ans = []

    function dfs(node) {
        if (!node || ans[0] === -1) return
        if (node.val !== voyage[currentIndex]) {
            ans = [-1]
            return
        }
        currentIndex++
        var val = voyage[currentIndex]
        var { left, right } = node
        if (left && left.val === val) {
            // 不需要反转
        } else if (!left && right && right.val === val) {
            // 不需要反转
        } else if (right && right.val === val) {
            ans.push(voyage[currentIndex - 1])
            node.left = right
            node.right = left
        }
        dfs(node.left)
        dfs(node.right)

    }
    dfs(root)

    return ans

};
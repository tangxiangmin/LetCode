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
 * @return {TreeNode}
 */
// 正常节点的val>=0，因此dfs判断一下node.val感觉就可以
var expandBinaryTree = function (root) {

    function dfs(node) {
        if (!node) return
        var { val, left, right } = node
        if (val !== -1) {
            if (left) {
                var tmp = new TreeNode(-1)
                node.left = tmp
                tmp.left = left
            }
            if (right) {
                var tmp = new TreeNode(-1)
                node.right = tmp
                tmp.right = right
            }
        }
        dfs(left)
        dfs(right)
    }
    dfs(root)
    return root
};
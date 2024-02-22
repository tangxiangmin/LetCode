/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// 中序遍历时，先找到节点p，记录一下，然后返回下一个会出现的值
var inorderSuccessor = function (root, p) {
    var flag = false
    var target = null
    function dfs(node) {
        if (!node) return
        dfs(node.left)
        if (target) return
        if (node.val === p.val) {
            flag = true
        } else if (flag) {
            target = node
            return
        }
        dfs(node.right)
    }
    dfs(root)
    return target
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
// 思路：看示例应该是先序遍历，题目要求原地展开，具体步骤
// 先将左节点转换为右节点，然后将原本右节点放在最后一个左节点
var flatten = function (root) {

    var rightNodes = []
    var node = root
    while (node) {
        let { left, right } = node

        if (left) {
            node.right = left
            node.left = null
            node = left
            // 保存收集到的右节点
            if (right) {
                rightNodes.push(right)
            }
        } else if (right) {
            node = right
        } else {
            // 叶子节点
            var next = rightNodes.pop() || null
            node.right = next
            node = next
        }
    }

    return root
};
// 思路2：dfs,后序遍历
var flatten = function (root) {
    function dfs(node) {
        if (!node) return null
        var l = dfs(node.left)
        var r = dfs(node.right)
        node.left = null
        if (l) {
            node.right = l
            // 找到链表的最后一个节点
            var head = l
            while (head.right) {
                head = head.right
            }
            head.right = r
        } else {
            node.right = r
        }
        return node
    }
    return dfs(root)
}
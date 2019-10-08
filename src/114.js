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
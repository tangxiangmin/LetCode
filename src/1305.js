/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
// 二叉搜索树，左节点的值小于父节点，右节点的值大于父节点，子树同样满足条件
// 思路，中序便利获取两个树，然后快慢指针合并升序数组
var getAllElements = function (root1, root2) {

    function midorder(node, arr) {
        if (!node) return
        midorder(node.left, arr)
        arr.push(node.val)
        midorder(node.right, arr)
    }
    var arr1 = []
    var arr2 = []
    midorder(root1, arr1)
    midorder(root2, arr2)
    var i = 0
    var j = 0
    var ans = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            ans.push(arr1[i])
            i++
        } else {
            ans.push(arr2[j])
            j++
        }
    }
    for (; i < arr1.length; ++i) {
        ans.push(arr1[i])
    }
    for (; j < arr2.length; ++j) {
        ans.push(arr2[j])
    }
    return ans
};
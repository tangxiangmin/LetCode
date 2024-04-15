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
 * @param {number} k
 * @return {boolean}
 */
// 中序遍历，得到升序数组,然后滑动窗口
var findTarget = function (root, k) {
    let arr = []
    function inorder(node) {
        if (!node) return
        inorder(node.left)
        arr.push(node.val)
        inorder(node.right)
    }
    inorder(root)

    let l = 0
    let r = arr.length - 1
    while (l < r) {
        const sum = arr[l] + arr[r]
        if (sum === k) {
            return true
        } else if (sum < k) {
            l++
        } else {
            r--
        }
    }
    return false

};
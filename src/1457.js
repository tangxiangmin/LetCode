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
 * @return {number}
 */
// 思路：BF 找到所有路径，然后判断是否为回文
var pseudoPalindromicPaths = function (root) {
    var ans = 0
    function dfs(node, counter) {
        if (!node) return
        counter[node.val]++
        if (!node.left && !node.right) {
            if (check(counter)) {
                ans++
            }

        } else {
            dfs(node.left, counter)
            dfs(node.right, counter)
        }
        counter[node.val]--
    }
    dfs(root, Array(10).fill(0))
    return ans

    function check(arr) {
        var odd = 0
        for (var num of arr) {
            if (num % 2 === 1) {
                odd++
            }
        }
        return odd <= 1
    }

};
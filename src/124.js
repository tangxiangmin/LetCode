/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var ans = -Infinity
    sideMax(root)
    return ans
    function sideMax(node){
        if(!node) return 0
        var l  = Math.max(0, sideMax(node.left)) //找到左边最大路径
        var r  = Math.max(0, sideMax(node.right)) // 找到右边最大路径
        ans = Math.max(ans,l + r + node.val) // l+r+node.val表示过node的最大路径
        return Math.max(l, r) + node.val
    }
};
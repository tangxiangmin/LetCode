/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 思路：bfs
var levelOrder = function(root) {
    if(!root) return []

    var ans = []
    var queue = [root]
    while(queue.length){
        var len = queue.length
        var arr = []
        for(var i = 0; i < len; ++i){
            const {left, right, val} = queue.shift()
            arr.push(val)
            left && queue.push(left)
            right && queue.push(right)
        }
        ans.push(arr)
    }
    return ans
};
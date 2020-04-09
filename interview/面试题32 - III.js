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
var levelOrder = function(root) {
    if(!root) return []

    var queue = [root]
    var ans = []
    var flag = true // 是否正向
    while(queue.length){
        var len = queue.length
        var arr = []
        for(var i = 0; i < len; ++i){
            var node =queue.shift()
            var {left, right, val} = node

            
            flag ? arr.push(val) : arr.unshift(val)

            left && queue.push(left)
            right && queue.push(right)
        }
        flag = !flag
        ans.push(arr)
    }
    return ans
};
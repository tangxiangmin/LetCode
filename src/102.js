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
    while(queue.length){
        var len = queue.length
        var row = []
        for(var i = 0; i< len; ++i){
            const {left, right,val } = queue.shift()
            if(left) queue.push(left)
            if(right) queue.push(right)
            row.push(val)
        }
        ans.push(row)
    }
    return ans
};
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
    if (!root) {
        return [];
    }
    var queue = [];
    queue.push(root);
    var ans = [];
    while (queue.length) {
        var row = []
        var len = queue.length
        for(var i = 0; i < len; ++i){
            var node = queue.shift()
            row.push(node) // 把当前这一行的数据保存在一起
            // 将下一层相关的节点继续保存在队列中中
            if(node.left){
                queue.push(node.left)
            }
            if(node.right){
                queue.push(node.right)
            }
        }
        ans.push(row)
    }
    return ans
};

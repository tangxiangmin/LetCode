/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
    if (!root) return [];

    var queue = [root];
    var ans = [];
    while (queue.length) {
        var len = queue.length;
        for (var i = 0; i < len; ++i) {
            var node = queue.shift();

            var { left, right, val } = node;

            ans.push(val);
            left && queue.push(left);
            right && queue.push(right);
        }
    }
    return ans;
};

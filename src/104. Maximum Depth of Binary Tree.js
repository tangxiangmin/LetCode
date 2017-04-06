/**
 * Created by admin on 2017/4/6.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var maxDepth = function(root) {
    if (root === null){
        return 0;
    }

    if (root.left === null && root.right === null){
        return 1;
    }

    var leftDepth = maxDepth(root.left);
    var rightDepth = maxDepth(root.right);
    return leftDepth > rightDepth? leftDepth + 1: rightDepth + 1;
};

var test = {
    val: 0,
    left: {
        val: 1,
        left: null,
        right: {
            val: 2,
            left: null,
            right: null
        }
    },
    right: null
};

console.log(maxDepth(test));

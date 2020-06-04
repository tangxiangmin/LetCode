/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    var ans = [];

    function inorder(root) {
        if (!root) {
            return ans;
        }
        inorder(root.left);
        ans.push(root.val);
        inorder(root.right);
    }

    inorder(root)
    for (var i = 0; i < ans.length - 1; ++i) {
        if(ans[i] >= ans[i+1]){
            return false
        }
    }
    return true
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function (root) {
    function dfs(root, depth){
        if(!root){
            return 0
        }
        return Math.max(dfs(root.left), dfs(root.right)) + 1
    }

    let left = dfs(root.left)
    let right = dfs(root.right)
    if(left == right) {
        return root
    }else if(left > right){
        return subtreeWithAllDeepest(root.left)
    }else if(left < right) {
        return subtreeWithAllDeepest(root.right);
    }
  
};

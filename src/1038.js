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
// 思路：新树节点的值等于原始值+右侧所有节点的值，因此从右子树中序遍历
var bstToGst = function(root) {
    let sum = 0
    inorder(root)
    return root
    
    function inorder(root){
        if(!root) return
        const {left, right, val} = root 
        inorder(right)
        root.val += sum
        sum += val
        inorder(left)
    }
};
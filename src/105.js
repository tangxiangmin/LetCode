/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// 根据前序和中序遍历的结果构造树，可以确定左右树和根节点，然后递归构造
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return null

    let head = preorder[0]
    let idx = inorder.indexOf(head)
    let l_inorder = inorder.slice(0, idx)
    let r_inorder = inorder.slice(idx+1)

    let l_preorder = preorder.slice(1, l_inorder.length + 1)
    let r_preorder = preorder.slice(l_inorder.length + 1)

    
    let root = new TreeNode(head)
    root.left = buildTree(l_preorder, l_inorder)
    root.right = buildTree(r_preorder, r_inorder)
    
    return root
};

var preorder = [3,9,20,15,7]
var inorder = [9,3,15,20,7]
buildTree(preorder, inorder)
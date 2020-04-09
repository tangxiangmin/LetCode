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
// 思路：前序遍历和中序遍历构建树，首先确定根节点，然后确定左右子树
var buildTree = function(preorder, inorder) {
    if (!preorder.length) return null;

    var rootVal = preorder[0];
    var idx = inorder.indexOf(rootVal);
    let inL = inorder.slice(0, idx);
    let inR = inorder.slice(idx + 1);

    let preL = preorder.slice(1, inL.length + 1);
    let preR = preorder.slice(inL.length + 1);
 

    var root = new TreeNode(rootVal);
    root.left = buildTree(preL, inL);
    root.right = buildTree(preR, inR);
    return root
};

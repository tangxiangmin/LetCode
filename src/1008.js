/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
// 先序遍历的BST
// [8,5,1,7,10,12] -> 8,5,10,1,7,null,12]
var bstFromPreorder = function(preorder) {
    if(!preorder.length) return null
    var head = new TreeNode( preorder[0])

    var i = 1
    for(; i< preorder.length; ++i){
        var cur = preorder[i]
        if(cur > head.val) {
            break
        }
    }
    var left = preorder.slice(1, i)
    var right = preorder.slice(i)

    head.left = bstFromPreorder(left)
    head.right = bstFromPreorder(right)
    return head
};
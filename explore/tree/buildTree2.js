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
var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null;
    }
    var rootVal = preorder.shift();
    var inorderLeft = [];
    var inorderRight = [];
    var isLeft = true;
    for (var i = 0; i < inorder.length; ++i) {
        var val = inorder[i];
        if (val === rootVal) {
            isLeft = false;
            continue;
        }
        if (isLeft) {
            inorderLeft.push(val);
        } else {
            inorderRight.push(val);
        }
    }
    var preorderLeft = [];
    var preorderRight = [];
    for (var i = 0; i < preorder.length; ++i) {
        if (i < inorderLeft.length) {
            preorderLeft.push(preorder[i]);
        } else {
            preorderRight.push(preorder[i]);
        }
    }
    var root = new TreeNode(rootVal);
    root.left = buildTree(preorderLeft, inorderLeft);
    root.right = buildTree(preorderRight, inorderRight);

    return root;
};

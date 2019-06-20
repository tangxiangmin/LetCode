/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (!postorder.length) {
        return null;
    }
    var rootVal = postorder.pop();
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
    var postorderLeft = [];
    var postorderRight = [];
    for (var i = 0; i < postorder.length; ++i) {
        if (i < inorderLeft.length) {
            postorderLeft.push(postorder[i]);
        } else {
            postorderRight.push(postorder[i]);
        }
    }
    var root = new TreeNode(rootVal);
    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);

    return root;
};

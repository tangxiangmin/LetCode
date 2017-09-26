/**
 * Created by admin on 2017/9/27.
 */
// 使二叉树左右对调，这道题有个梗
// > Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.

// 思路：递归~

var invertTree = function(root) {
    if(!root){
        return root;
    }
    let left = root.left;
    root.left = root.right;
    root.right = left;
    invertTree(root.left);
    invertTree(root.right);

    return root;
};
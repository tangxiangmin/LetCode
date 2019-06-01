// 二叉树的后序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 递归版本
var postorderTraversal = function(root) {
    var res = []
    function post(root){
        if(!root){
            return 
        }
        post(root.left)
        post(root.right)
        res.push(root.val)
    }
    post(root)
    return res
};
// 迭代版本
var postorderTraversal = function(root) {
    if(!root){
        return []
    }

    var node = root
    var res = []
    var stack = []
    var stack_flag = []
    while(node || stack.length){
        if(node) {
            stack.push(node)
            stack_flag.push(0)
            node = node.left
        }else {
            node = stack[stack.length-1]
            stack.pop()
            flag = stack_flag[stack_flag.length - 1];
            stack_flag.pop()
            if(flag == 0){
                stack.push(node)
                stack_flag.push(1);
                node = node.right
            }else {
                res.push(node.val)
                node = null
            }
        }
    }
    return res
};
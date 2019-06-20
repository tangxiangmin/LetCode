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
// 使用递归
// var preorderTraversal = function(root) {
//     var ans = []
//     function preorder(node){
//         if(!node){
//             return
//         }
//         ans.push(node.val)
//         preorder(node.left)
//         preorder(node.right)
//     }
//
//     preorder(root)
//     return ans
// };

// 使用迭代
var preorderTraversal = function(root) {
    var ans = [];
    var st = [];
    var visited = new Map();
    if(!root){
        return []
    }
    st.push(root);
    while (st.length) {
        var node = st[st.length - 1];
        if (!visited.has(node)) {
            visited.set(node, true);
            ans.push(node.val);
        }

        var left = node.left;
        var right = node.right;

        if (left && !visited.has(left)) {
            st.push(left);
        } else if (right && !visited.has(right)) {
            st.push(right);
        } else {
            st.pop();
        }
    }
    return ans;
};

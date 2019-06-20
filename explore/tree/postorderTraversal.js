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

var postorderTraversal = function(root) {
    var ans = [];
    var st = [];
    var visited = new Map();
    if (!root) {
        return [];
    }
    st.push(root);

    while (st.length) {
        var top = st[st.length - 1];
        var left = top.left;
        var right = top.right;

        if (left && !visited.has(left)) {
            visited.set(left, true);
            st.push(left);
        } else if (right && !visited.has(right)) {
            visited.set(right, true);
            st.push(right);
        } else {
            ans.push(top.val);
            st.pop();
        }
    }
    return ans;
};
//  1
// 2 3


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);

var res = postorderTraversal(root);
console.log(res);

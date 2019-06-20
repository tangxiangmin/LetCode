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
var inorderTraversal = function(root) {
    if (root === null) {
        return [];
    }

    var st = [root];
    var ans = [];
    var visited = new Map();


    while (st.length) {
        var top = st[st.length - 1];

        var left = top.left;
        var right = top.right;

        if (!left || visited.has(left)) {
            ans.push(top.val);
            st.pop(); // 弹出节点
            if (right) {
                st.push(right);
            }
        } else {
            if (!visited.has(left)) {
                visited.set(left, true);
                st.push(left);
            }
        }
    }
    return ans;
};

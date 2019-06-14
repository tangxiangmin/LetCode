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
 * 使用循环来实现二叉树的中序遍历
 */
var inorderTraversal = function(root) {
    if(root === null){
        return []
    }

    var st = [root];
    var ans = [];
    var visited = [];

    function isVisited(node){
        return visited.includes(node)
    }

    while (st.length) {
         var top = st[st.length - 1];
         if (!top.left || isVisited(top.left)) {
             ans.push(top.val);
             st.pop(); // 弹出根节点
             var right = top.right;
             if (right && !isVisited(right)) {
                 visited.push(right);
                 st.push(right);
             }
         } else {
             var left = top.left;
             if (!isVisited(left)) {
                 visited.push(left);
                 st.push(left);
             }
         }
    }
    return ans;
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var root = new TreeNode(1);
root.right = new TreeNode(2);
root.left = new TreeNode(4);
root.right.left = new TreeNode(3)

console.log(inorderTraversal(root)); // [4,1,3,2]
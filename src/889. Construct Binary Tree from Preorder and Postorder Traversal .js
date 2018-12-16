/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function (pre, post) {
    let cursor = 0
    let head = new TreeNode(pre[cursor])
    function dfs(root){
        if (cursor > pre.length){
            return
        }

        cursor++
        let left = new TreeNode(pre[cursor]);
        root.left = left;

        cursor++
        let right = new TreeNode(pre[cursor]);
        root.right = right

        dfs(node.left);
        dfs(node.right);
    }

    dfs(head)
    return head
};
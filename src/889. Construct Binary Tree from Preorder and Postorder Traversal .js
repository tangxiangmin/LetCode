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
// 前序: 根 -> 左子树 -> 右子树
// 后续: 左子树 -> 右子树 -> 根

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

        dfs(root.left);
        dfs(root.right);
    }

    dfs(head)
    return head
};

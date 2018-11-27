 // 二叉树中找到最近的祖先节点

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.、 = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    // 交换顺序，保证p在左边
    if (p.val > q.val) {
        let tmp = p
        p = q
        q = tmp
    }
    if(root.val  >= p.val && root.val <= q.val){
        return root
    }else if(root.val <= p.val){
        return lowestCommonAncestor(root.right, p, q)
    }else if(root.val >= p.val){
        return lowestCommonAncestor(root.left, p, q);
    }
};
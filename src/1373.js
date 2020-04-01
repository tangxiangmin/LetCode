/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 思路：从二叉树中找到BST子树，然后求其和
var maxSumBST = function(root) {
    if (!root) return 0;

    if (isBST(root)) {
        return Math.max(sum(root), maxSumBST(root.left), maxSumBST(root.right));
    } else {
        const { left, right } = root;
        return Math.max(maxSumBST(left), maxSumBST(right));
    }

    function isBST(node) {
        if (!node) return true;
        if (node.isBST !== undefined) return node.isBST;

        const { left, right, val } = node;
        if (left && left.val >= val) return false;
        if (right && right.val <= val) return false;

        node.isBST = isBST(left) && isBST(right);

        return node.isBST;
    }

    function sum(node) {
        if (!node) return 0;
        if(node.sum !== undefined) return node.sum
        const { left, right, val } = node;
        let total = val + sum(left) + sum(right);
        node.sum = total
        return total
    }
};

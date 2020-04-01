/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    if (!root) return true;
    const {left, right} = root
    if(!left && !right) return true

    deep(root, 0);

    let l = left && left.deep || 0
    let r = right && right.deep || 0
    
    return Math.abs(l - r) <= 1 && isBalanced(right) && isBalanced(left)

    function deep(node) {
        if (!node) return 0;
        if(node.deep) return node.deep;

        const { left, right } = node;
        node.deep = 1 + Math.max(deep(left), deep(right));

        return node.deep;
    }
};

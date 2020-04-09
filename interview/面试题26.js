/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
    if(!A || !B) return false
    return isSame(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);

    function isSame(node1, node2) {
        if(!node2) return true
        if(!node1) return false
        const { left: l1, right: r1, val: v1 } = node1;
        const { left: l2, right: r2, val: v2 } = node2;

        return v1 === v2 && isSame(l1, l2) && isSame(r1, r2);
    }
};

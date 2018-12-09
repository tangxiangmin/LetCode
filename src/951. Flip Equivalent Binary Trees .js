/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function(root1, root2) {
    if (root1 === root2) {
        return true;
    } else if (!root1 || !root2 || root1.val !== root2.val) {
        return false;
    }

    function isNodeEqual(node1, node2) {
        if (node1 === node2) {
            return true;
        }
        return node1 && node2 && node1.val === node2.val;
    }

    function swap(node) {
        let left = node.left;
        node.left = node.right;
        node.right = left;
    }

    if (!isNodeEqual(root1.left, root2.left)) {
        swap(root2);
    }

    if (!isNodeEqual(root1.left, root2.left)) {
        return false;
    }
    return (
        flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
    );
};

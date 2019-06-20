/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) {
        return null;
    }
    return preorder(root);
    // 先序遍历，从顶向下判断
    function preorder(node) {
        if (!node) {
            return null;
        }
        var { left, right } = node;
        // 如果当前节点均包含p和q，则node为p、q的祖先节点
        if (hashNode(node, p) && hashNode(node, q)) {
            var l = preorder(left);
            var r = preorder(right);
            if (!l && !r) {
                // 如果 l 和 r都不满足，则最近的根节点即为node
                return node;
            } else {
                // 如果满足，则继续遍历
                return l || r;
            }
        } else {
            return null;
        }
    }

    // 判断某个子节点是否包含其他节点
    function hashNode(root, target) {
        if (!root) {
            return false;
        }
        if (root === target) {
            return true;
        }

        return hashNode(root.left, target) || hashNode(root.right, target);
    }
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

//   1
// 2   4
//  3 5

var root = new TreeNode(1);
var left = new TreeNode(2);
left.right = new TreeNode(3);
root.left = left;

var right = new TreeNode(4);
right.left = new TreeNode(5);
root.right = right;


console.log(lowestCommonAncestor(root, left.right, right));

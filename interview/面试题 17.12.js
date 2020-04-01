/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 思路：把BST转换成单链表，先序遍历，同时保存每个节点的父节点
// {left, right} = node `````````
// 对于叶子节点来说
// left.next = node
// node.next = right
// right.next = node.parent
// ...
var convertBiNode = function(root) {
    if (!root) return null;

    var arr = [];

    preorder(root);

    var head = arr[0];
    for (var i = 0; i < arr.length - 1; ++i) {
        var cur = arr[i];
        cur.left = null;
        cur.right = arr[i + 1];
    }
    arr[i].left = null;
    arr[i].right = null;
    return head;
    function preorder(node, parent) {
        if (!node) return parent;
        const { left, right } = node;
        preorder(left);
        arr.push(node);
        preorder(right);
    }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {

    function dfs(cur, node) {
        if (!cur) return true
        if (!node) return false
        if (cur.val !== node.val) return false
        return dfs(cur.next, node.left) || dfs(cur.next, node.right)

    }
    return dfs(head, root) || dfs(head, root.left) || dfs(head, root.right)
};
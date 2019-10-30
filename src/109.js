/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
// 思路：链表的中点作为根节点，递归处理左右节点即可
var sortedListToBST = function (head) {
    if (!head) {
        return null
    }
    if (!head.next) {
        return new TreeNode(head.val)
    }

    var cur = head
    var count = 0
    while (cur) {
        count++
        cur = cur.next
    }
    cur = head
    var i = 0
    // 找到中间节点的上一个节点
    while (i <= Math.floor(count / 2) - 2) {
        i++
        cur = cur.next
    }

    var next = cur.next // 中点
    var r = next.next
    cur.next = null

    var root = new TreeNode(next.val)

    root.left = sortedListToBST(head)
    root.right = sortedListToBST(r)
    return root
};

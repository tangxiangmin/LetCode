/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
// 在不知道头节点的情况下将中间节点删除掉，
// 可以将后面节点的值复制到前一个节点，然后将最后一个节点删掉
var deleteNode = function (node) {
    node.val = node.next.val
    node.next = node.next.next
};
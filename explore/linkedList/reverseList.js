/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 具体流程为
// 1->2->3
// 2->1->3
// 3->2->1

var reverseList = function(head) {
    if (!head) {
        return null;
    }
    // 只有一个节点
    if (!head.next) {
        return head;
    }

    var first = head.next; // 现在链表的起始节点
    var last = head;
    while (head.next) {
        // 将下一个节点添加到链表的头部
        head.next = first.next;
        first.next = last;

        // 迭代
        last = first;
        first = head.next;
    }
    return first || last;
};

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
// 判断链表有环可以使用快慢指针
// 从相遇点到入环点的距离加上 n-1 圈的环长，恰好等于从链表头部到入环点的距离。
var detectCycle = function (head) {
    let slow = head
    let fast = head
    while (slow && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow == fast) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null
};
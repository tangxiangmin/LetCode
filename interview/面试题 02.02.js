
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
// 跟22一样的思路，快慢指针
var kthToLast = function(head, k) {
    var fast = head;
    var slow = head;
    while (fast) {
        fast = fast.next;
        if (k > 0) {
            k--;
            continue;
        }
        slow = slow.next;
    }
    return slow.val;
};
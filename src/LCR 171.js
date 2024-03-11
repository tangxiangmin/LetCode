/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    let a = headA
    let b = headB
    if (!a || !b) return null

    while (a !== b) {
        a = a.next
        b = b.next
        if (!a && !b) return null
        if (!a) {
            a = headB
        }
        if (!b) {
            b = headA
        }
    }
    return a
};
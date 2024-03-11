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
// 可以使用map记录已访问的节点，也可以使用快慢指针
var getIntersectionNode = function (headA, headB) {
    let a = headA
    let b = headB
    while (a !== b) {
        a = a.next
        b = b.next
        if (!a && !b) return null // 走了a+b的长度后还不相等
        if (!a) {
            a = headB
        }
        if (!b) {
            b = headA
        }
    }
    return a
};
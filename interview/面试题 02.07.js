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
// 使用map记录一下，空间O(n)
var getIntersectionNode = function (headA, headB) {
    const visited = new Map()
    while (headA) {
        visited.set(headA, true)
        headA = headA.next
    }
    while (headB) {
        if (visited.has(headB)) {
            return headB
        }
        headB = headB.next
    }
    return null
};
// 还可以使用快慢指针，这样只需要空间O(1)，
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null
    let a = headA
    let b = headB
    while (a !== b) {
        a = a.next
        b = b.next
        // 都走了两个链表长度之和的长度后还没有相交，则说明没有交点
        if (!a && !b) return null

        if (!a) {
            a = headB
        }
        if (!b) {
            b = headA
        }
    }
    return a
}
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */


// 需要区分头结点
var deleteNode = function (head, val) {
    if (head.val === val) return head.next
    let cur = head
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
            break
        }
        cur = cur.next
    }
    return head
};
// 也可以使用一个虚拟节点，避免单独处理头结点的问题
var deleteNode = function (head, val) {
    const front = new ListNode(-Infinity)
    front.next = head
    let cur = front
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
            break
        }
        cur = cur.next
    }
    return front.next
}
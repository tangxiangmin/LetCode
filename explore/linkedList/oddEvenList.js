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
var oddEvenList = function(head) {
    if (!head) {
        return null;
    }

    var odd = head; // 奇数节点的头指针
    var even = head.next; // 偶数节点的头指针

    var po = odd;
    var pe = even;

    while (po && pe && po.next && pe.next) {
        po.next = pe.next;
        po = po.next;

        pe.next = po.next;
        pe = pe.next;
    }
    po.next = even;

    return odd;
};

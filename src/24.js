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
var swapPairs = function(head) {
    var prev;
    var originHead = head;

    while (head) {
        if (!prev) {
            prev = head;
        } else {
            originHead = head;
            prev.next = swapPairs(head.next);
            head.next = prev;
            break;
        }
        head = head.next;
    }
    return originHead;
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 思路：从个位开始，向后增位即可
var addTwoNumbers = function (l1, l2) {
    let add = 0
    let head
    let cur

    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
        if (sum >= 10) {
            sum -= 10
            add += 1
        }
        const tmp = new ListNode(sum)
        if (!head) {
            head = tmp
        } else {
            cur.next = tmp
        }
        cur = tmp

        if (l1) {
            l1 = l1.next
        }
        if (l2) {
            l2 = l2.next
        }
    }
    return head
};
// [5,5]
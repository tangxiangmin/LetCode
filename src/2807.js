function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {

    let cur = head
    while (cur.next) {
        const val = gcd(cur.val, cur.next.val)
        const next = cur.next
        cur.next = new ListNode(val)
        cur.next.next = next
        cur = next
    }
    return head
};
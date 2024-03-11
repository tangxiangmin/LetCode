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
var sortList = function (head) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    arr.sort((a, b) => a.val - b.val)
    for (let i = 0; i < arr.length; ++i) {
        const cur = arr[i]
        cur.next = arr[i + 1] ?? null
    }
    return arr[0]
};
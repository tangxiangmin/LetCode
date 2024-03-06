/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// 思路，先考虑BF
var reorderList = function (head) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    for (const node of arr) {
        node.next = null
    }
    let l = 0
    let r = arr.length - 1
    while (l < r) {
        arr[l].next = arr[r]
        if (l + 1 < r) {
            arr[r].next = arr[l + 1]
        }
        l++
        r--
    }
    return arr[0]
};
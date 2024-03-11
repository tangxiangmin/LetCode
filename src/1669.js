/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {

    let cur = list1
    let count = 0


    while (cur) {
        count++
        let next = cur.next
        if (count === a) {
            cur.next = list2
        } else if (count === b + 1) {
            // list2的尾节点
            let tail = list2
            while (tail.next) {
                tail = tail.next
            }
            tail.next = next
            break
        }
        cur = next
    }
    return list1
};
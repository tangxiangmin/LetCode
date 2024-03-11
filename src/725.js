/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
// 思路，看起来要先统计一下长度
var splitListToParts = function (head, k) {

    let cur = head
    let count = 0
    while (cur) {
        count++
        cur = cur.next
    }
    const ans = []
    cur = head

    let val = Math.floor(count / k)
    let extra = count % k
    let i = 0
    let front
    while (cur) {
        const next = cur.next
        if (i === 0) {
            front = cur
        }
        i++
        const target = extra > 0 ? val + 1 : val
        if (i === target) {
            cur.next = null
            ans.push(front)
            i = 0
            extra--
        }
        cur = next
    }

    for (let j = ans.length; j < k; ++j) {
        ans.push(null)
    }
    return ans
};
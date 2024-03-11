/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
    var cur = head.next
    let prev = head
    let count = 1
    let firstIndex = -1
    let lastIndex
    let min = -1
    while (cur.next) {
        if ((cur.val < prev.val && cur.val < cur.next.val) || (cur.val > prev.val && cur.val > cur.next.val)) {
            if (firstIndex === -1) {
                firstIndex = count
                lastIndex = count
            } else {
                if (min === -1) {
                    min = count - lastIndex
                } else {
                    min = Math.min(min, count - lastIndex)
                }
                lastIndex = count
            }
        }
        count++
        prev = cur
        cur = cur.next
    }
    let max
    if (!lastIndex || firstIndex === lastIndex) {
        max = -1
    } else {
        max = lastIndex - firstIndex
    }
    return [min, max]
};
var head = [3, 1]
head = [5, 3, 1, 2, 5, 1, 2]
head = [1, 3, 2, 2, 3, 2, 2, 2, 7]
head = [2, 3, 3, 2]
head = [2, 2, 1, 3]
const { createLinkListByArr } = require('../libs/linkList')

var ans = nodesBetweenCriticalPoints(createLinkListByArr(head))
console.log(ans)
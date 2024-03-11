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
var reverseEvenLengthGroups = function (head) {

    let cur = head
    let count = 0
    let len = 1
    let start
    let lastSorted
    while (cur) {
        const next = cur.next
        count++
        if (count === len) {
            if (len % 2 === 0) {
                lastSorted = reverse(start, cur)
            }
            count = 0
            len++

            start = cur
        } else if (!next && count % 2 === 0) {
            reverse(len % 2 === 0 ? start : lastSorted, cur)
        }
        cur = next
    }

    return head

    function reverse(prev, end) {
        const start = prev.next
        const next = end.next
        let cur = start
        const arr = []
        while (cur !== next) {
            arr.push(cur)
            cur = cur.next
        }

        cur = prev
        for (let i = arr.length - 1; i >= 0; --i) {
            cur.next = arr[i]
            cur = cur.next
        }
        cur.next = next
        return cur
    }
};

var head = [5, 2, 6, 3, 9, 1, 7, 3, 8, 4]
// head = [1, 1, 0, 6]
// head = [2, 1]
head = [1, 1, 0, 6, 5]
head = [1, 5, 0, 2, 4, 7, 3, 6]

const { createLinkListByArr, flattenLinkList } = require('../libs/linkList')

var ans = reverseEvenLengthGroups(createLinkListByArr(head))
console.log(flattenLinkList(ans))
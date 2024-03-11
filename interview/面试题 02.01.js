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
var removeDuplicateNodes = function (head) {
    let cur = head
    let visited = new Map()
    let prev = head
    while (cur) {
        if (visited.has(cur.val)) {
            prev.next = cur.next
        } else {
            visited.set(cur.val, true)
            prev = cur
        }

        cur = cur.next

    }
    return head
};

var head = [1, 2, 3, 3, 2, 1]
head = [1, 1, 1, 1, 2]

const { createLinkListByArr, flattenLinkList, ListNode } = require('../libs/linkList')

var ans = removeDuplicateNodes(createLinkListByArr(head))
console.log(flattenLinkList(ans))
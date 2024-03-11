/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    const front = new ListNode(-1)
    front.next = head

    let count = 0
    function dfs(prev, node) {
        if (!node) {
            return
        }
        dfs(node, node.next)
        count++
        if (count === n) {
            prev.next = node.next
        }
    }
    dfs(front, head)
    return front.next
};

const { createLinkListByArr, flattenLinkList, ListNode } = require('../libs/linkList')
var head = [1, 2, 3, 4, 5], n = 2
var ans = removeNthFromEnd(createLinkListByArr(head), n)
console.log(flattenLinkList(ans))
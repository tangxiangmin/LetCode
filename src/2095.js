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
// 思路1，dfs
var deleteMiddle = function (head) {
    let count = 0
    let max = 0
    function dfs(node) {
        if (!node) {
            max = count
            return
        }
        count++
        dfs(node.next)
        count--
        if (count === Math.floor(max / 2) - 1) {
            node.next = node.next.next
        }
    }
    dfs(head)
    if (max === 1) return null
    return head
};
// 思路2，可以使用快慢指针，当快指针到最后的时候，慢指针刚好到中间为止
var deleteMiddle = function (head) {
    if (!head.next) return null
    let slow = head
    let fast = head
    let prev = head
    while (fast && fast.next) {
        prev = slow
        slow = slow.next
        fast = fast.next.next
    }
    prev.next = prev.next.next
    return head
}

const { createLinkListByArr, flattenLinkList } = require('../libs/linkList')

var head = [1, 3, 4, 7, 1, 2, 6]
// head = [1]
head = [1, 2, 3, 4]
// head = [2, 1]

var ans = deleteMiddle(createLinkListByArr(head))
console.log(flattenLinkList(ans))
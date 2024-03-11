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
// 模拟
var mergeNodes = function (head) {
    let front = new ListNode(-1)
    front.next = head
    let cur = front
    let start
    while (cur) {
        var next = cur.next
        if (next && next.val === 0) {
            console.log(cur.val)
            if (!start) {
                start = cur
            } else {
                start = merge(start, next)
            }
        }
        cur = next
    }
    return front.next
    function merge(prev, end) {
        let cur = prev.next
        let next = end.next
        let sum = 0
        while (cur !== end) {
            sum += cur.val
            cur = cur.next
        }
        const node = new ListNode(sum)
        prev.next = node
        node.next = next
        return node
    }
};
// 好像也可以使用快慢指针，避免二次循环 TODO 实现
var mergeNodes = function (head) { }

var head = [0, 3, 1, 0, 4, 5, 2, 0]
head = [0, 1, 0, 3, 0, 2, 2, 0]
const { ListNode, createLinkListByArr, flattenLinkList } = require('../libs/linkList')
var ans = mergeNodes(createLinkListByArr(head))
console.log(flattenLinkList(ans))

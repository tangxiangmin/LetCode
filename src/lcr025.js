/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


// 思路，要从尾节点向前
var addTwoNumbers = function (l1, l2) {
    const arr1 = toArr(l1)
    const arr2 = toArr(l2)

    let front = new ListNode(0)
    while (arr1.length || arr2.length) {
        let n1 = arr1.pop()
        let n2 = arr2.pop()
        let val = (n1 ? n1.val : 0) + (n2 ? n2.val : 0) + front.val
        front.val = val
        const node = new ListNode(0)
        if (val >= 10) {
            node.val = 1
            front.val -= 10
        }
        node.next = front
        front = node
    }
    return front.val === 0 ? front.next : front

    function toArr(l) {
        let arr = []
        while (l) {
            arr.push(l)
            l = l.next
        }
        return arr
    }

};

const { createLinkListByArr, flattenLinkList, ListNode } = require('../libs/linkList')

var l1 = [7, 2, 4, 3], l2 = [5, 6, 4]
l1 = [2,4,3], l2 = [5,6,4]
l1 = [0], l2 = [0]
var ans = addTwoNumbers(createLinkListByArr(l1), createLinkListByArr(l2))
console.log(flattenLinkList(ans))
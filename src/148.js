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


// 思路1,跟147的插入排序一样，复习一下，但是要超时
var sortList = function (head) {
    if (!head) return null
    const front = new ListNode(-Infinity)
    front.next = head
    let lastSorted = head, cur = head.next
    while (cur) {
        if (lastSorted.val <= cur.val) {
            lastSorted = lastSorted.next
        } else {
            let prev = front
            while (prev.next.val <= cur.val) {
                prev = prev.next
            }
            lastSorted.next = cur.next
            cur.next = prev.next
            prev.next = cur
        }
        cur = lastSorted.next
    }
    return front.next
};
// 数组加快排
var sortList = function (head) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    arr.sort((a, b) => a.val - b.val)
    head = arr[0]
    for (let i = 1; i <= arr.length; ++i) {
        head.next = arr[i] ?? null
        head = head.next
    }
    return arr[0] ?? null
}

const { ListNode, createLinkListByArr, flattenLinkList } = require('../libs/linkList')

var head = [4, 2, 1, 3]
// head = [-1, 5, 3, 4, 0]
// head = [1, 1]
var ans = sortList(createLinkListByArr(head))
console.log(flattenLinkList(ans))
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    const left = []
    const right = []
    for (const node of arr) {
        if (node.val < x) {
            left.push(node)
        } else {
            right.push(node)
        }
    }
    const list = [...left, ...right]
    for (let i = 0; i < list.length; ++i) {
        const cur = list[i]
        cur.next = list[i + 1] ?? null
    }
    return list[0]
};

// 使用两个单独的链表来分别保存小于x的和大于等于x的节点
var partition = function(head, x) {
    let small = new ListNode(0);
    const smallHead = small;
    let large = new ListNode(0);
    const largeHead = large;
    while (head !== null) {
        if (head.val < x) {
            small.next = head;
            small = small.next;
        } else {
            large.next = head;
            large = large.next;
        }
        head = head.next;
    }
    large.next = null;
    small.next = largeHead.next;
    return smallHead.next;
};


var head = [1, 4, 3, 2, 5, 2], x = 3
head = [2,1], x = 2
const { createLinkListByArr, flattenLinkList, ListNode } = require('../libs/linkList')

var ans = partition(createLinkListByArr(head), x)
console.log(flattenLinkList(ans))
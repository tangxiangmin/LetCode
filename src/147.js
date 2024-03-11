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
// 链表实现插入排序 升序
// [4, 2, 1, 3]
// [2, 4, 1, 3]
// [1, 2, 4, 3]
// [1, 2, 3, 4]
// BF 链表不熟悉的话，先转成数组再排序
var insertionSortList = function (head) {
    var arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    for (let i = 1; i < arr.length; ++i) {
        for (let j = i; j > 0; --j) {
            if (arr[j].val < arr[j - 1].val) {
                var tmp = arr[j]
                arr[j] = arr[j - 1]
                arr[j - 1] = tmp
            }
        }
    }
    head = arr[0]
    let cur = head
    for (let i = 1; i <= arr.length; ++i) {
        cur.next = arr[i] ?? null
        cur = arr[i]
    }
    return head
}

// 思路2,使用链表的遍历来解决问题
var insertionSortList = function (head) {
    const front = new ListNode(-Infinity) // 虚拟头结点，方便后续操作
    front.next = head
    let cur = head
    while (cur) {
        let pointer = front
        const next = cur.next
        while (pointer) {
            let n = pointer.next
            if (n && n.val > cur.val) {
                pointer.next = cur
                cur.next = n
                break
            }
            pointer = pointer.next
        }
        cur = next
    }
    // 调整最后一个元素的next，避免出现环
    const visited = new Map()
    cur = front
    while (cur) {
        if (visited.has(cur.next)) {
            cur.next = null
            break
        }
        visited.set(cur, true)
        cur = cur.next
    }
    return front.next
};

var insertionSortList = function (head) {
    const front = new ListNode(-Infinity)
    front.next = head
    // 使用一个lastSorted来保存已排序节点的末尾
    let lastSorted = head, cur = head.next;
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
}
const { ListNode, createLinkListByArr, flattenLinkList } = require('../libs/linkList')

var head = [4, 2, 1, 3]
head = [-1, 5, 3, 4, 0]
// head = [1, 1]
var ans = insertionSortList(createLinkListByArr(head))
console.log(flattenLinkList(ans))

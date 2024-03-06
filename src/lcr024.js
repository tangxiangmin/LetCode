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
// 思路1：使用数组
var reverseList = function (head) {
    if (!head) return null
    var arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }
    arr.reverse()
    for (let i = 0; i < arr.length; ++i) {
        const node = arr[i]
        node.next = arr[i + 1] || null
    }
    return arr[0]
};

// 思路2：使用递归，要找到下一个节点，因此在后序位置处理即可
var reverseList = function (head) {
    if (!head) return null
    let ans
    function dfs(head) {
        if (!head.next) {
            ans = head
            return
        }
        dfs(head.next)
        head.next.next = head
        head.next = null
    }
    dfs(head)
    return ans
}


const { createLinkListByArr, flattenLinkList } = require('../libs/linkList')
var head = [1, 2, 3, 4, 5]
var ans = reverseList(createLinkListByArr(head))
console.log("res123123", flattenLinkList(ans))
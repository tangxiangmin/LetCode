/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 思路，碰见需要正反序遍历链表的可以使用递归
var swapNodes = function (head, k) {

    let l = 0
    let r
    let left
    let right
    function dfs(node) {
        if (!node) {
            r = 0
            return
        }
        l++
        if (l === k) {
            left = node
        }
        dfs(node.next)
        r++
        if (r === k) {
            right = node
        }
    }

    dfs(head)
    let tmp = left.val
    left.val = right.val
    right.val = tmp
    return head
};

var head = [1, 2, 3, 4, 5], k = 2
head = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5], k = 5
head = [1], k = 1
const { ListNode, createLinkListByArr, flattenLinkList } = require('../libs/linkList')
var ans = swapNodes(createLinkListByArr(head), k)
console.log(flattenLinkList(ans))
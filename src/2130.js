/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// 思路，dfs 一前以后
var pairSum = function (head) {

    let front = head
    let max = -Infinity
    function dfs(node) {
        if (!node) {

            return
        }
        dfs(node.next)
        let sum = front.val + node.val
        max = Math.max(sum, max)
        front = front.next
    }
    dfs(head)
    return max
};
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
var trainningPlan = function (head) {
    if(!head) return null
    let ans
    function dfs(head) {
        if (!head) return null
        dfs(head.next)

        if (head.next) {
            head.next.next = head
            head.next = null
        } else {
            ans = head
        }
    }
    dfs(head)
    return ans
};
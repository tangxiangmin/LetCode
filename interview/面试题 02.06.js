/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let front = head
    let ans = true
    function dfs(node) {
        if (!node) return
        dfs(node.next)
        if (node.val !== front.val) {
            ans = false
        }
        front = front.next
    }
    dfs(head)
    return ans
};
// 思路2，不使用额外变量ans
var isPalindrome = function (head) {
    let front = head
    function dfs(node) {
        if (node) {
            if (!dfs(node.next)) {
                return false
            }
            if (node.val !== front.val) {
                return false
            }
            front = front.next
        }
        return true
    }
    return dfs(head)
}
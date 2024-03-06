/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 迭代
var isPalindrome = function (head) {
    var arr = []
    while (head) {
        arr.push(head.val)
        head = head.next
    }
    let l = 0, r = arr.length - 1
    while (l < r) {
        if (arr[l] !== arr[r]) {
            return false
        }
        l++
        r--
    }
    return true
};
// 递归
var isPalindrome = function (head) {
    let frontPointer = head;
    function dfs(node) {
        if (node) {
            if (!dfs(node.next)) {
                return false
            }
            if (node.val !== frontPointer.val) {
                return false;
            }
            frontPointer = frontPointer.next;
        }
        return true
    }
    return dfs(head)
}
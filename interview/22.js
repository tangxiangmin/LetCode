/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// 思路快慢指针
var getKthFromEnd = function(head, k) {
    var fast = head;
    var slow = head;
    while (fast) {
        fast = fast.next;
        if (k > 0) {
            k--;
            continue;
        }
        slow = slow.next;
    }
    return slow;
};

/**
 * 翻转单链表
 * 思路：先翻转前k个节点，剩余节点使用递归
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    var count = 0;
    var ans = [];
    var originHead = head;

    while (count < k && head) {
        count++;
        ans.push(head);
        head = head.next;
    }
    
    // 不足k个，则不翻转
    if(count < k){
        return originHead
    }

    // 翻转前k个节点
    var tmp = ans.pop();
    originHead = tmp
    while (ans.length) {
        tmp.next = ans.pop();
        tmp = tmp.next
    }
    
    tmp.next = reverseKGroup(head, k)
    return originHead;
};

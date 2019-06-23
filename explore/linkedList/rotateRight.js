/**
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
var rotateRight = function(head, k) {
    if (!head) {
        return null;
    }

    // 获取链表长度
    var len = 0;
    var cur = head;
    var last;
    while (cur) {
        len++;
        // 保留最后一个节点
        if (!cur.next) {
            last = cur;
        }
        cur = cur.next;
    }

    k = k % len;
    // 无任何改变
    if (k == 0) {
        return head;
    }

    k = len - k;
    cur = head;
    while (k > 1) {
        cur = cur.next;
        k--;
    }

    var res = cur.next;
    if(!res){
        res = cur
    }
    cur.next = null;
    last.next = head;

    return res;
};

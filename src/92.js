/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    var cur = head;
    var count = 1;
    var arr = [];
    var prev;

    while (cur) {
        if (count === m - 1) {
            prev = cur;
        } else if (count >= m && count <= n) {
            // 收集需要反转的节点
            arr.push(cur);
        } else if (count > n) {
            break;
        }

        count++;
        cur = cur.next;
    }
    // 开始反转
    var start = arr.pop();
    var last = start.next;
    if (prev) {
        prev.next = start;
    } else {
        head = start;
    }

    while (arr.length) {
        start.next = arr.pop();
        start = start.next;
    }
    start.next = last;

    return head;
};

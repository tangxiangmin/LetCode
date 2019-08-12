/**
 * Definition for singly-linked list.
 * 1->2->3->3->4->4->5 输出 1->2->5
 * 1->1->1->2->3 输出 2->3
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var prev = null
    var cur = head 

    while (cur) {
        // 往后遍历需要删除的节点
        var next = cur.next;
        var needRemove = false
        while (next && next.val === cur.val) {
            next = next.next;
            needRemove = true
        }

        if (!needRemove) {
            prev = cur
        }else {
            if (prev) {
                prev.next = next;
            } else {
                head = next;
            }
        }
        cur = next;
    }
    return head
};

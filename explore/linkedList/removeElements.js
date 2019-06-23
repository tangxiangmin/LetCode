/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    // 去除头指针为val
    while (head && head.val === val) {
        head = head.next;
    }
    if(!head){
        return null
    }
    
    var cur = head
    while (cur) {
        var next = cur.next
        if (next && next.val === val) {
            cur.next = next.next
        }else {
            cur = cur.next;
        }
    }
    return head
};

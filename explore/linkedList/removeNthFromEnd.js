/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return null;
    }

    var pf = head;
    var ps = head;
   
    while(n > 0){
        pf = pf.next
        n--
    }
    if(pf){
        // 删除其他节点
        while (pf.next) {
            pf = pf.next;
            ps = ps.next;
        }
        ps.next = ps.next ? ps.next.next : null;
        return head;
    }else {
        // 删除的是头结点
        return head.next
    }
};

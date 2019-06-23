/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    var pf = head; // 快指针
    var ps = head; // 慢指针

    var m = 0; // 环的长度
    var hasFirstMeet = false;

    while (pf && pf.next && ps && ps.next) {
        pf = pf.next.next;
        ps = ps.next;
        if (hasFirstMeet) {
            m++;
        }
        if (ps === pf) {
            if (!hasFirstMeet) {
                hasFirstMeet = true;
            } else {
                break;
            }
        }
    }
    if (hasFirstMeet && m > 0) {
        // 得到环的长度之后，将快慢指针同时指向head，并将快指针提前移动m步，后续每次循环时快慢指针都走一步，下次相遇时则为开始起环的节点
        pf = head
        ps = head
        
        while(m > 0){
            pf = pf.next
            m--
        }
        while(pf !== ps){
            pf = pf.next
            ps = ps.next
        }
        return ps
    } else {
        return null;
    }
};

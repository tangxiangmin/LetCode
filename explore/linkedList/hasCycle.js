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
var hasCycle = function(head) {
    var pf = head // 快指针 
    var ps = head // 慢指针

    while(pf && pf.next && ps && ps.next){
        pf = pf.next.next
        ps = ps.next
        if(ps === pf){
            return true
        }
    }


    return pf === ps && pf !== head
};

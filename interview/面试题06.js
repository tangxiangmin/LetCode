/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    var arr = []
    var cur = head
    while(cur){
        arr.push(cur.val)
        cur = cur.next
    }
    return arr.reverse()
};
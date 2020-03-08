/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    if (!head) return 0;
    var cur = head;
    var len = 0;
    while (cur) {
        cur = cur.next;
        len++;
    }
    var sum = 0 
    cur = head
    let i = 1
    while(cur){
        sum += Math.pow(2, len-i)
        i++
        cur = cur.next
    }
    return sum
};

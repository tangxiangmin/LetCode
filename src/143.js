/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var arr = [];
    var cur = head;
    while (cur) {
        arr.push(cur);
        cur = cur.next;
    }

    cur = head;
    var len = arr.length;
    var count = Math.floor(arr.length / 2) - (len % 2 ? 0 : 1);
    while (count > 0) {
        var last = arr.pop();
        // 向cur和next中插入节点
        last.next = cur.next;
        cur.next = last;

        cur = last.next;
        count--;
    }
    var last = arr.pop();
    if (last) {
        last.next = null;
    }
    return head;
};

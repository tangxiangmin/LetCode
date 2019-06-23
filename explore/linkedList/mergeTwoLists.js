/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    // 确认头结点
    var head;
    if (l1.val < l2.val) {
        head = l1;
        l1 = l1.next;
    } else {
        head = l2;
        l2 = l2.next;
    }
    // 遍历
    var cursor = head;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cursor.next = l1;
            l1 = l1.next;
        } else {
            cursor.next = l2
            l2 = l2.next
        }
        cursor = cursor.next
    }
    // 补充剩余的节点
    if(l1){
        cursor.next = l1
    }else if(l2){
        cursor.next = l2
    }
    return head
};

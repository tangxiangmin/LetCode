// 删除链表节点
// 思路：使用前节点来进行判断

var removeElements = function(head, val) {


    var prev = new ListNode(null);
    prev.next = head;

    var cur = prev;

    while(cur != null){
        var next = cur.next;
        if (next && next.val == val){
            cur.next = next.next
        }else {
            cur = cur.next;
        }
    }

    return prev.next;
};
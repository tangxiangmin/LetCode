// 给定一个单链表，判断是否回文链表
// 是否能够满足时间O(n)、空间O(1)
// 思路：题意理解错了，回文链表只是表是节点的值满足回文条件
// 找到中间的节点即可


var isPalindrome = function(head) {
    var slow = head;
    var fast = head;
    if (fast===null || fast.next === null){
        return true;
    }
    var prev = [];
    prev.push(slow);

    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        prev.push(slow);
    }
    if (fast.next!==null){
        slow = slow.next
    }
    var cur = slow;
    while(cur!=null){
        if (cur.val!=prev.pop().val){
            return false
        }
        cur = cur.next;
    }

    return true;
};


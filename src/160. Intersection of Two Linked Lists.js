// 找到两个的单链表的交点. 如果没有交点 返回null
// 时间O(n) 空间O(1)

// 思路：如果是单链表的交点，则交点后面的节点应该完全相同，分别遍历节点，较长的链表所处的位置就是交点

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {

    function getLength(node) {
        var len = 0;
        while (node){
            len++;
            node = node.next;
        }

        return len;
    }
    
    // 求出链表长度
    var countA = getLength(headA),
        countB = getLength(headB);

    // 挪动到长度相等的位置
    while(countA > countB){
        headA = headA.next
        countA--;
    }
    while(countA < countB){
        headB = headB.next;
        countB--;
    }

    // 求公共节点
    while(headA != headB && headA && headB){
        headA = headA.next;
        headB = headB.next;
    }

    return headA;

};



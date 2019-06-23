/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 思路1，将节点分别保存在两个栈中，然后依次出栈，找到栈顶相等的节点即可，时间O(n),空间O(2*n)
var getIntersectionNode2 = function(headA, headB) {
    var stA = createSt(headA);
    var stB = createSt(headB);
    while (stA.length && stB.length) {
        var a = stA.pop();
        var b = stB.pop();

        // 某一个栈已全部弹出时特殊处理
        if (!stA.length || !stB.length) {
            if (a === b) {
                return a;
            }
        }

        if (a !== b) {
            return a.next;
        }
    }

    return null;
    function createSt(head) {
        var st = [];
        while (head) {
            st.push(head);
            head = head.next;
        }
        return st;
    }
};

// 双指针法
var getIntersectionNode = function(headA, headB) {
    var pa = headA;
    var pb = headB;
    if (!pa || !pb) {
        return null;
    }
    while(pa !== pb){
        if(!pa){
            pa = headB;
        }else {
            pa = pa.next
        }

        if(!pb){
            pb = headA
        }else {
            pb = pb.next;
        }
    }
    return pa
};

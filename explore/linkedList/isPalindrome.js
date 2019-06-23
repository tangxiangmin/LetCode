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

// 思路1， 通过数组
var isPalindrome2 = function(head) {
    var st = [];
    while (head) {
        st.push(head.val);
        head = head.next;
    }

    var len = st.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; ++i) {
        if (st[i] !== st[len - i - 1]) {
            return false;
        }
    }

    return true;
};
// 思路2 通过递归，使用js时某些测试用例会超过函数栈调用
var isPalindrome = function(head) {
    var tmp = head;
    function check(head) {
        if (!head) {
            return true;
        }
        var res = isPalindrome(head.next) && tmp.val === head.val;
        tmp = tmp.next // 获取最后一个节点，通过栈弹出
        return res
    }
    return check(head)
};

// 思路3 可以通过翻转链表，然后与原链表依次对比实现

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var len = 0;
    var cur = head;

    while (cur) {
        len++;
        cur = cur.next;
    }

    if (len === 1 && n === 1) {
        return null;
    }

    cur = head;
    var count = 0;
    var target = len - n + 1;
    if (target === 1) {
        return cur.next;
    }

    while (cur) {
        count++;

        if (count === target - 1) {
            cur.next = (cur.next && cur.next.next) || null;

            break;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

// 思路2：使用栈
var removeNthFromEnd = function (head, n) {
    var cur = head;

    var stack = [];
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    stack.splice(stack.length - n, 1);
    for(var i = 0; i < stack.length; ++i){
        // var next = stack[i+1]
        stack[i].next = stack[i+1] || null
    }
    return stack[0] || null
};

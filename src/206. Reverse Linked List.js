/**
 * Created by admin on 2017/4/13.
 */
var reverseList = function(head) {
    var stack = [];
    while (head) {
        var node = new ListNode(head.val);
        stack.push(node);
        head = head.next;
    }

    var len = stack.length;
    if (!len) {
        return null;
    }

    for (var i = len - 1; i > 0; --i) {
        stack[i].next = stack[i - 1];
    }

    return stack[len-1];
};


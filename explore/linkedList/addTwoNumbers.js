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
var addTwoNumbers = function(l1, l2) {
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    var sum = l1.val + l2.val;
    var head = new ListNode(sum);
    var cursor = head;

    var p1 = l1.next;
    var p2 = l2.next;

    while (p1 && p2) {
        var sum = p1.val + p2.val;
        var next = new ListNode(sum);

        p1 = p1.next;
        p2 = p2.next;

        cursor.next = next;
        cursor = cursor.next;
    }
    // 补全较长的链表剩余节点
    if (p1) {
        cursor.next = p1;
    } else if (p2) {
        cursor.next = p2;
    }

    // 将超过9的节点进位
    var cur = head;
    while (cur) {
        if (cur.val > 9) {
            var next = cur.next;
            if (next) {
                next.val += 1;
                cur.val = cur.val - 9;
            } else {
                next = new ListNode(1);
                cur.val = cur.val - 9;
            }
        }
        cur = cur.next;
    }

    return head;
};

// 先将链表解析成数字，然后再将其和还原成链表
var addTwoNumbers2 = function(l1, l2) {
    function parse(head) {
        if (!head) {
            return 0;
        }
        var res = "";
        while (head) {
            res = head.val + res;
            head = head.next;
        }
        return res;
    }

    function create(str) {
        var len = str.length;
        var head = new ListNode(str[len - 1]);
        var cur = head;
        for (var i = len - 2; i >= 0; ++i) {
            cur.next = new ListNode(str[i]);
            cur = cur.next;
        }
        return head;
    }

    var sum = parse(l1) + parse(l2); // 注意超大数溢出
    return create(sum.toString());
};

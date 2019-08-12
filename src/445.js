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
    if (!l1) return l2;
    if (!l2) return l1;

    var arr1 = stack(l1);
    var arr2 = stack(l2);

    // 保证arr1较长
    if (arr1.length < arr2.length) {
        [arr2, arr1] = [arr1, arr2];
    }

    var arr = [];
    while (arr2.length) {
        var t1 = arr1.pop();
        var t2 = arr2.pop();

        var node = new ListNode(t1.val + t2.val);
        if (node.val >= 10) {
            var prev = arr1[arr1.length - 1];
            if (!prev) {
                prev = new ListNode(0);
                arr1 = [prev];
            }
            prev.val += 1;
            node.val -= 10;
        }
        arr.push(node);
    }
    while (arr1.length) {
        var cur = arr1.pop();
        if (cur.val >= 10) {
            var prev = arr1[arr1.length - 1];
            if (!prev) {
                prev = new ListNode(0);
                arr1 = [prev]
            }
            prev.val += 1;
            cur.val -= 10;
        }

        arr.push(cur);
    }

    var head = arr.pop();
    var cur = head;
    while (arr.length) {
        cur.next = arr.pop();
        cur = cur.next;
    }
    return head;

    function stack(head) {
        var ans = [];
        while (head) {
            ans.push(head);
            head = head.next;
        }
        return ans;
    }
};

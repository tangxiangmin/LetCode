/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
// 思路：使用两个指针，慢指针表示在左侧的值，快指针表示在右侧的值，遍历时调换节点的位置
var partition = function (head, x) {
    if (!head) {
        return null
    }

    var l = null
    var r = null

    var lh = null
    var rh = null

    while (head) {
        if (head.val < x) {
            if (!l) {
                l = head
            } else {
                l.next = head
                l = l.next
            }

            !lh && (lh = head)
        } else {
            if (!r) {
                r = head
            } else {
                r.next = head
                r = r.next
            }
            !rh && (rh = head)
        }
        head = head.next
    }
    if (!lh) {
        lh = rh
    } else {
        l.next = rh
    }

    r && (r.next = null)
    return lh
};

// 输入: head = 1->4->3->2->5->2, x = 3
// 输出: 1->2->2->4->3->5
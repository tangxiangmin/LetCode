/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 思路1，每次从所有链表的头结点找到最小的节点，然后插入到新节点
// 在大量数据的情况下会溢出
var mergeKLists = function (lists) {
    lists = lists.filter((node) => !!node);
    if (!lists.length) return null;

    var min = 0;
    var head = lists[0];
    for (var i = 1; i < lists.length; ++i) {
        var node = lists[i];
        if (!node) continue;
        if (node.val < head.val) {
            head = node;
            min = i;
        }
    }
    lists[min] = lists[min].next;
    head.next = mergeKLists(lists);
    return head;
};

// 思路2：将有序列表合并成新的列表，可以使用归并排序
var mergeKLists = function (lists) {
    return walk(lists);

    function walk(lists) {
        if (lists.length < 2) return lists[0] || null;

        var mid = lists.length >> 1;

        let l = lists.slice(0, mid);
        let r = lists.slice(mid);

        var r1 = walk(l);
        var r2 = walk(r);
        return merge(r1, r2);
    }

    function merge(l1, l2) {
        if (!l1) return l2;
        if (!l2) return l1;

        var cur = null;
        var head = null;
        while (l1 || l2) {
            if ((l1 && l2 && l1.val > l2.val) || !l1) {
                cur && (cur.next = l2);
                cur = l2;
                l2 = l2.next;
            } else if (l1) {
                cur && (cur.next = l1);
                cur = l1;
                l1 = l1.next;
            }

            if (!head) {
                head = cur;
            }
        }
        return head
    }
};

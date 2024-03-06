/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 思路，BF，转成数组比较，会超时
var removeNodes = function (head) {
    const arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }

    const ans = []
    for (let i = 0; i < arr.length; ++i) {
        let flag = false
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j].val > arr[i].val) {
                flag = true
                break
            }
        }
        if (!flag) {
            ans.push(arr[i])
        }
    }
    for (let i = 0; i < ans.length; ++i) {
        const cur = ans[i]
        cur.next = ans[i + 1] || null
    }
    return ans[0]
};

// 转换思路，对于每个节点而言，可以先将他右边的都删减完，已经整理后的链表应该是个降序排列的链表，只需要判断当前节点与后续头结点的大小即可
var removeNodes = function (head) {

    // 返回值:后续链表的头节点
    function dfs(node) {
        if (!node.next) return node

        const next = dfs(node.next)
        // 判断node节点是否需要被删除
        if (next.val > node.val) {
            return next
        }
        node.next = next
        return node
    }
    return dfs(head)
}

// 上面递归的另外一种写法
var removeNodes = function (head) {
    if (head == null) {
        return null;
    }
    head.next = removeNodes(head.next);
    if (head.next != null && head.val < head.next.val) {
        return head.next;
    } else {
        return head;
    }
};

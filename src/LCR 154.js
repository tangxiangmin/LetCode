/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
// 主要是mrando节点，需要保证其指向复制后的节点，由于节点值可能相同，可以使用一个map保存每个节点的克隆节点
var copyRandomList = function (head) {
    const visited = new Map()
    return clone(head)

    function clone(cur) {
        if (!cur) return null
        if (visited.has(cur)) return visited.get(cur)

        const node = new ListNode(cur.val)
        visited.set(cur, node)

        node.next = clone(cur.next)
        node.random = clone(cur.random)

        return node
    }
};
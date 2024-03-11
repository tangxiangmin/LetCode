/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let cur = head
    while (cur) {
        const next = cur.next
        const child = cur.child
        if (child) {
            flatten(child)
            cur.child = null
            cur.next = child
            child.prev = cur
            let tail = child
            while (tail.next) {
                tail = tail.next
            }
            tail.next = next
            if (next) {
                next.prev = tail
            }
        }
        cur = next
    }
    return head
};
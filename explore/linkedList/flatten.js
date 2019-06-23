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
var flatten = function(head) {
    var st = walk(head, []);
    var h = st[0];
    if (!h) {
        return null;
    }
    var cur = h;
    for (var i = 1; i < st.length; ++i) {
        cur.next = st[i];
        st[i].prev = cur;
        cur.child = null
        cur = st[i];
    }
    return h;

    function walk(head, st) {
        if (!head) {
            return st;
        }
        var cur = head;
        while (cur) {
            st.push(cur);
            if (cur.child) {
                walk(cur.child, st);
            }
            cur = cur.next;
        }
        return st
    }
};

/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    var cur = head;
    var st = [];

    while (cur) {
        st.push(cur);
        cur = cur.next;
    }
    var nodes = st.map(node => {
        return new Node(node.val, null);
    });

    for (var i = 0; i < st.length; ++i) {
        var random = st[i].random;
        var index = st.indexOf(random);
        nodes[i].random = nodes[index] || null;
        nodes[i].next = nodes[i+1] || null
    }
    return nodes[0];
};

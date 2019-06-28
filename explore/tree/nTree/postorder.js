/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder2 = function(root) {
    var res = [];
    function post(root) {
        if (!root) {
            return;
        }
        root.children.forEach(subNode => {
            post(subNode);
        });
        res.push(root.val);
    }

    post(root);
    return res;
};

// 递归实现
var postorder = function(root) {
    if (!root) {
        return [];
    }
    var st = [root];
    var visited = new Map();
    var ans = [];
    while (st.length) {
        var top = st[st.length - 1];
        var children = top.children || [];
        
        // 找到还未遍历的子节点
        children = children.filter(node => {
            return !visited.has(node);
        });

        if (children.length) {
            for (var i = 0; i < children.length; ++i) {
                var node = children[i];
                visited.set(node, true);
                st.push(node);
                break; // 跳出当前层级的遍历，开始以node为根节点的深度遍历
            }
        } else {
            ans.push(top.val);
            st.pop();
        }
    }
    return ans;
};


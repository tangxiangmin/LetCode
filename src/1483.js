/**
 * @param {number} n
 * @param {number[]} parent
 */
var TreeAncestor = function (n, parent) {
    this.parent = map
};

/** 
 * @param {number} node 
 * @param {number} k
 * @return {number}
 */
// 这个方法会超出时间限制
TreeAncestor.prototype.getKthAncestor = function (node, k) {
    var p = node
    while (k > 0) {
        p = this.parent[p]
        if (p === -1) return -1
        k--
    }
    return p
};

// 直接看题解的倍数幂次，核心思路是初始化的时候记录父节点和父节点的父节点
const LOG = 16;
var TreeAncestor = function (n, parent) {
    ancestors = new Array(n).fill(0).map(() => new Array(LOG).fill(-1));
    for (let i = 0; i < n; i++) {
        ancestors[i][0] = parent[i];
    }
    for (let j = 1; j < LOG; j++) {
        for (let i = 0; i < n; i++) {
            if (ancestors[i][j - 1] !== -1) {
                ancestors[i][j] = ancestors[ancestors[i][j - 1]][j - 1];
            }
        }
    }
}

TreeAncestor.prototype.getKthAncestor = function (node, k) {
    for (let j = 0; j < LOG; j++) {
        if (((k >> j) & 1) !== 0) {
            node = ancestors[node][j];
            if (node === -1) {
                return -1;
            }
        }
    }
    return node;
};
/**
 * Your TreeAncestor object will be instantiated and called as such:
 * var obj = new TreeAncestor(n, parent)
 * var param_1 = obj.getKthAncestor(node,k)
 */
/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(N, edges) {
    var map = {};
    // 构造数据结构
    for (var i = 0; i < edges.length; ++i) {
        var [r, c] = edges[i];
        if (!map[r]) {
            map[r] = new TreeNode(r);
        }
        if (!map[c]) {
            map[c] = new TreeNode(c);
        }
        var parent = map[r];
        var child = map[c];

        parent.children.push(child);
        child.parents = [parent].concat(parent.parents);
    }
    var ans = [];
    for (var i = 0; i < N; ++i) {
        var node1 = map[i];
        var dis = 0;
        for (var j = 0; j < i; ++j) {
            var node2 = map[j];
            dis += dist(node1, node2);
        }
        for (var j = i + 1; j < N; ++j) {
            var node2 = map[j];
            var res = dist(node1, node2)
            dis += res;
        }
        ans.push(dis);
    }
    return ans;

    function TreeNode(val) {
        this.val = val;
        this.children = [];
        this.parents = [];
    }
   
    function dist(node1, node2) {
        // 最近的公共节点parent开始， parent->node1 + parent->node2
        var p1 = node1.parents
        var p2 = node2.parents
        var l1 = p1.length;
        var l2 = p2.length;

        if (l1 > l2) {
            var tmp = p1;
            p1 = p2;
            p2 = tmp;

            tmp = l1;
            l1 = l2;
            l2 = tmp;
            tmp =node1
            node1 = node2
            node2 = tmp
        }

        if (l1 === 0) return l2;

        // 当p1是p2的祖先节点
        let idx = p2.indexOf(node1);
        if (idx > -1) {
            return idx + 1;
        }

        // [3,2,0] [5, 4,2,0]
        // 当p1、p2包含相同非root父节点
        while(l1 > 0){
            if(p1[l1-1] === p2[l2-1]){
                l1--
                l2--
            }
        }
        // console.log(l1, l2)

        return l1 + l2 + 2
    }

  
};

var N = 6,
    edges = [
        [0, 1],
        [0, 2],
        [2, 3],
        [2, 4],
        [2, 5]
    ];

N = 3
edges = [[2,0],[1,0]] // 我擦，还有这种倒着的树
var res = sumOfDistancesInTree(N, edges);
console.log(res);

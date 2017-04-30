/**
 * Created by admin on 2017/4/20.
 */
// 在二叉树中找到某条节点之和等于给定参数的路径上
// 这个就是基本的深度优先算法(dfs)了
// 可以把问题看作是某个节点开始的路径上之和为sum - node.val的问题，递归转变成找到某个节点的值为sum值的问题
// 如果找到则将计数器+1，最后返回总的计数器
var pathSum = function(root, sum) {
    function dfs(node, sum) {
        var res = 0;
        if (node === null) return res;
        if (sum === root.val) res++;
        // console.log(sum);
        res += dfs(node.left, sum - node.val);
        res += dfs(node.right, sum - node.val);
        return res;
    }

    if (root === null) return 0;
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
};

/**
 * Created by admin on 2017/10/4.
 */
// 给定二叉树，获取从根到叶子的所有路径
// 思考：深度优先
var binaryTreePaths = function(root) {

    function dfs(node, path = '', res= []) {

        path.push(node.val)
        if (!node.left && !node.right){
            res.push(path + node.val);
        }else if(node.left){
            dfs(node.left, path + node.val + '->', res);
        }if(node.right){
            dfs(node.right, path+node.val + '->', res);
        }
    }

    var res = [];
    if (!root){
        return [];
    }
    dfs(root, '', res);

    return res;
};
